(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"B+Dq":function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=r(a("BMrR"));a("+L6B");var o=r(a("2/Rp"));a("jCWc");var u=r(a("kPKH"));a("5NDa");var s=r(a("5rEg")),i=r(a("pVnL")),c=r(a("QILm")),d=r(a("lwsE")),f=r(a("W8MJ")),p=r(a("a1gu")),m=r(a("Nsbk")),g=r(a("7W2i"));a("y8nQ");var h=r(a("Vl3Y")),v=n(a("q1tI")),b=r(a("BGR+")),y=r(a("JAxp")),E=r(a("dQek")),C=r(a("s+z6")),M=h.default.Item,w=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,p.default)(this,(0,m.default)(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customprops,r=e.rules,l={rules:r||n.rules};return t&&(l.onChange=t),a&&(l.initialValue=a),l},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name;t&&t(a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props.form.getFieldDecorator,a=this.props,n=(a.onChange,a.customprops),r=(a.defaultValue,a.rules,a.name),d=a.getCaptchaButtonText,f=a.getCaptchaSecondText,p=(a.updateActive,a.type),m=(0,c.default)(a,["onChange","customprops","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type"]),g=this.getFormItemOptions(this.props),h=m||{};if("Captcha"===p){var E=(0,b.default)(h,["onGetCaptcha","countDown"]);return v.default.createElement(M,null,v.default.createElement(l.default,{gutter:8},v.default.createElement(u.default,{span:16},t(r,g)(v.default.createElement(s.default,(0,i.default)({},n,E)))),v.default.createElement(u.default,{span:8},v.default.createElement(o.default,{disabled:e,className:y.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(f):d))))}return v.default.createElement(M,null,t(r,g)(v.default.createElement(s.default,(0,i.default)({},n,h))))}}]),t}(v.Component);w.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var x={};Object.keys(E.default).forEach(function(e){var t=E.default[e];x[e]=function(a){return v.default.createElement(C.default.Consumer,null,function(n){return v.default.createElement(w,(0,i.default)({customprops:t.props,rules:t.rules},a,{type:e,updateActive:n.updateActive,form:n.form}))})}});var q=x;t.default=q},JAxp:function(e,t,a){e.exports={login:"antd-pro-main-resources-src4js-src-components-login-index-login",getCaptcha:"antd-pro-main-resources-src4js-src-components-login-index-getCaptcha",icon:"antd-pro-main-resources-src4js-src-components-login-index-icon",other:"antd-pro-main-resources-src4js-src-components-login-index-other",register:"antd-pro-main-resources-src4js-src-components-login-index-register",prefixIcon:"antd-pro-main-resources-src4js-src-components-login-index-prefixIcon",submit:"antd-pro-main-resources-src4js-src-components-login-index-submit"}},"M+k9":function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("pVnL")),o=r(a("lwsE")),u=r(a("W8MJ")),s=r(a("a1gu")),i=r(a("Nsbk")),c=r(a("7W2i"));a("Znn+");var d=r(a("ZTPi")),f=n(a("q1tI")),p=r(a("s+z6")),m=d.default.TabPane,g=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),h=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,s.default)(this,(0,i.default)(t).call(this,e)),a.uniqueId=g("login-tab-"),a}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return f.default.createElement(m,this.props,e)}}]),t}(f.Component),v=function(e){return f.default.createElement(p.default.Consumer,null,function(t){return f.default.createElement(h,(0,l.default)({tabUtil:t.tabUtil},e))})};v.typeName="LoginTab";var b=v;t.default=b},QBZU:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var l=r(a("Vl3Y"));a("Znn+");var o=r(a("ZTPi")),u=r(a("RIqP")),s=r(a("lwsE")),i=r(a("W8MJ")),c=r(a("a1gu")),d=r(a("Nsbk")),f=r(a("7W2i")),p=n(a("q1tI")),m=(r(a("17x9")),r(a("TSYQ"))),g=r(a("B+Dq")),h=r(a("M+k9")),v=r(a("Yrmy")),b=r(a("JAxp")),y=r(a("s+z6")),E=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,c.default)(this,(0,d.default)(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e});var t=a.props.onTabChange;t(e)},a.getContext=function(){var e=a.state.tabs,t=a.props.form;return{tabUtil:{addTab:function(t){a.setState({tabs:[].concat((0,u.default)(e),[t])})},removeTab:function(t){a.setState({tabs:e.filter(function(e){return e!==t})})}},form:t,updateActive:function(e){var t=a.state,n=t.type,r=t.active;r[n]?r[n].push(e):r[n]=[e],a.setState({active:r})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=t.type,l=a.props,o=l.form,u=l.onSubmit,s=n[r];o.validateFields(s,{force:!0},function(e,t){u(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,r=n.type,u=n.tabs,s=[],i=[];return p.default.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?s.push(e):i.push(e))}),p.default.createElement(y.default.Provider,{value:this.getContext()},p.default.createElement("div",{className:(0,m.default)(t,b.default.login)},p.default.createElement(l.default,{onSubmit:this.handleSubmit},u.length?p.default.createElement(p.default.Fragment,null,p.default.createElement(o.default,{animated:!1,className:b.default.tabs,activeKey:r,onChange:this.onSwitch},s),i):a)))}}]),t}(p.Component);E.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},E.Tab=h.default,E.Submit=v.default,Object.keys(g.default).forEach(function(e){E[e]=g.default[e]});var C=l.default.create()(E);t.default=C},Y5yc:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var l=n(a("CtXQ"));a("sRBo");var o=n(a("kaz8"));a("fOrg");var u,s,i,c=n(a("+KLJ")),d=n(a("MVZn")),f=n(a("lwsE")),p=n(a("W8MJ")),m=n(a("a1gu")),g=n(a("Nsbk")),h=n(a("7W2i")),v=r(a("q1tI")),b=a("MuoO"),y=a("LLXN"),E=n(a("mOP9")),C=n(a("QBZU")),M=n(a("w2qy")),w=C.default.Tab,x=C.default.UserName,q=C.default.Password,N=C.default.Mobile,T=C.default.Captcha,k=C.default.Submit,P=(u=(0,b.connect)(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"]}}),u((i=function(e){function t(){var e,a;(0,f.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,m.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(r))),a.state={type:"account",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm.validateFields(["mobile"],{},function(n,r){if(n)t(n);else{var l=a.props.dispatch;l({type:"login/getCaptcha",payload:r.mobile}).then(e).catch(t)}})})},a.handleSubmit=function(e,t){var n=a.state.type;if(!e){var r=a.props.dispatch;r({type:"login/login",payload:(0,d.default)({},t,{type:n})})}},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return v.default.createElement(c.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return(0,h.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.login,n=t.submitting,r=this.state,u=r.type,s=r.autoLogin;return v.default.createElement("div",{className:M.default.main},v.default.createElement(C.default,{defaultActiveKey:u,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(t){e.loginForm=t}},v.default.createElement(w,{key:"account",tab:(0,y.formatMessage)({id:"app.login.tab-login-credentials"})},"error"===a.status&&"account"===a.type&&!n&&this.renderMessage((0,y.formatMessage)({id:"app.login.message-invalid-credentials"})),v.default.createElement(x,{name:"userName",placeholder:"".concat((0,y.formatMessage)({id:"app.login.userName"}),": admin or user"),rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.userName.required"})}]}),v.default.createElement(q,{name:"password",placeholder:"".concat((0,y.formatMessage)({id:"app.login.password"}),": ant.design"),rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.password.required"})}],onPressEnter:function(){return e.loginForm.validateFields(e.handleSubmit)}})),v.default.createElement(w,{key:"mobile",tab:(0,y.formatMessage)({id:"app.login.tab-login-mobile"})},"error"===a.status&&"mobile"===a.type&&!n&&this.renderMessage((0,y.formatMessage)({id:"app.login.message-invalid-verification-code"})),v.default.createElement(N,{name:"mobile",placeholder:(0,y.formatMessage)({id:"form.phone-number.placeholder"}),rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.phone-number.required"})},{pattern:/^1\d{10}$/,message:(0,y.formatMessage)({id:"validation.phone-number.wrong-format"})}]}),v.default.createElement(T,{name:"captcha",placeholder:(0,y.formatMessage)({id:"form.verification-code.placeholder"}),countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:(0,y.formatMessage)({id:"form.get-captcha"}),getCaptchaSecondText:(0,y.formatMessage)({id:"form.captcha.second"}),rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.verification-code.required"})}]})),v.default.createElement("div",null,v.default.createElement(o.default,{checked:s,onChange:this.changeAutoLogin},v.default.createElement(y.FormattedMessage,{id:"app.login.remember-me"})),v.default.createElement("a",{style:{float:"right"},href:""},v.default.createElement(y.FormattedMessage,{id:"app.login.forgot-password"}))),v.default.createElement(k,{loading:n},v.default.createElement(y.FormattedMessage,{id:"app.login.login"})),v.default.createElement("div",{className:M.default.other},v.default.createElement(y.FormattedMessage,{id:"app.login.sign-in-with"}),v.default.createElement(l.default,{type:"alipay-circle",className:M.default.icon,theme:"outlined"}),v.default.createElement(l.default,{type:"taobao-circle",className:M.default.icon,theme:"outlined"}),v.default.createElement(l.default,{type:"weibo-circle",className:M.default.icon,theme:"outlined"}),v.default.createElement(E.default,{className:M.default.register,to:"/user/register"},v.default.createElement(y.FormattedMessage,{id:"app.login.signup"})))))}}]),t}(v.Component),s=i))||s),S=P;t.default=S},Yrmy:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp")),l=n(a("pVnL")),o=n(a("QILm"));a("y8nQ");var u=n(a("Vl3Y")),s=n(a("q1tI")),i=n(a("TSYQ")),c=n(a("JAxp")),d=u.default.Item,f=function(e){var t=e.className,a=(0,o.default)(e,["className"]),n=(0,i.default)(c.default.submit,t);return s.default.createElement(d,null,s.default.createElement(r.default,(0,l.default)({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},p=f;t.default=p},dQek:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=n(a("CtXQ")),l=n(a("q1tI")),o=n(a("JAxp")),u={UserName:{props:{size:"large",id:"userName",prefix:l.default.createElement(r.default,{type:"user",className:o.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"lock",className:o.default.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"mobile",className:o.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:l.default.createElement(r.default,{type:"mail",className:o.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=u},"s+z6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),r=(0,n.createContext)(),l=r;t.default=l},w2qy:function(e,t,a){e.exports={main:"antd-pro-main-resources-src4js-src-pages-user-login-main",icon:"antd-pro-main-resources-src4js-src-pages-user-login-icon",other:"antd-pro-main-resources-src4js-src-pages-user-login-other",register:"antd-pro-main-resources-src4js-src-pages-user-login-register"}}}]);