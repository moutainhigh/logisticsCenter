(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{YiZ1:function(e,t,a){e.exports={avatarHolder:"antd-pro-main-resources-src4js-src-pages-account-center-center-avatarHolder",name:"antd-pro-main-resources-src4js-src-pages-account-center-center-name",detail:"antd-pro-main-resources-src4js-src-pages-account-center-center-detail",title:"antd-pro-main-resources-src4js-src-pages-account-center-center-title",group:"antd-pro-main-resources-src4js-src-pages-account-center-center-group",address:"antd-pro-main-resources-src4js-src-pages-account-center-center-address",tagsTitle:"antd-pro-main-resources-src4js-src-pages-account-center-center-tagsTitle",teamTitle:"antd-pro-main-resources-src4js-src-pages-account-center-center-teamTitle",tags:"antd-pro-main-resources-src4js-src-pages-account-center-center-tags",team:"antd-pro-main-resources-src4js-src-pages-account-center-center-team",tabsCard:"antd-pro-main-resources-src4js-src-pages-account-center-center-tabsCard"}},zMb4:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M"));a("T2oS");var c=n(a("W9HT"));a("14J3");var s=n(a("BMrR"));a("jCWc");var u=n(a("kPKH"));a("Telt");var d=n(a("Tckk"));a("Pwec");var i=n(a("CtXQ"));a("5NDa");var o=n(a("5rEg"));a("+BJd");var f=n(a("mr32"));a("/zsF");var p,m,g,h=n(a("PArb")),E=n(a("RIqP")),v=n(a("lwsE")),b=n(a("W8MJ")),y=n(a("a1gu")),j=n(a("Nsbk")),k=n(a("7W2i")),T=n(a("PJYZ")),C=r(a("q1tI")),w=a("MuoO"),N=n(a("mOP9")),I=n(a("usdK")),P=n(a("v99g")),V=n(a("YiZ1")),z=(p=(0,w.connect)(function(e){var t=e.loading,a=e.user,n=e.project;return{listLoading:t.effects["list/fetch"],currentUser:a.currentUser,currentUserLoading:t.effects["user/fetchCurrent"],project:n,projectLoading:t.effects["project/fetchNotice"]}}),p((g=function(e){function t(){var e,a;(0,v.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,y.default)(this,(e=(0,j.default)(t)).call.apply(e,[this].concat(r))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.onTabChange=function(e){var t=a.props.match;switch(e){case"articles":I.default.push("".concat(t.url,"/articles"));break;case"applications":I.default.push("".concat(t.url,"/applications"));break;case"projects":I.default.push("".concat(t.url,"/projects"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,T.default)((0,T.default)(a)),t=e.state,n=t.inputValue,r=t.newTags;n&&0===r.filter(function(e){return e.label===n}).length&&(r=[].concat((0,E.default)(r),[{key:"new-".concat(r.length),label:n}])),a.setState({newTags:r,inputVisible:!1,inputValue:""})},a}return(0,k.default)(t,e),(0,b.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"list/fetch",payload:{count:8}}),e({type:"project/fetchNotice"})}},{key:"render",value:function(){var e=this.state,t=e.newTags,a=e.inputVisible,n=e.inputValue,r=this.props,p=r.listLoading,m=r.currentUser,g=r.currentUserLoading,E=r.project.notice,v=r.projectLoading,b=r.match,y=r.location,j=r.children,k=[{key:"articles",tab:C.default.createElement("span",null,"\u6587\u7ae0 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"applications",tab:C.default.createElement("span",null,"\u5e94\u7528 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"projects",tab:C.default.createElement("span",null,"\u9879\u76ee ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))}];return C.default.createElement(P.default,{className:V.default.userCenter},C.default.createElement(s.default,{gutter:24},C.default.createElement(u.default,{lg:7,md:24},C.default.createElement(l.default,{bordered:!1,style:{marginBottom:24},loading:g},m&&Object.keys(m).length?C.default.createElement("div",null,C.default.createElement("div",{className:V.default.avatarHolder},C.default.createElement("img",{alt:"",src:m.avatar}),C.default.createElement("div",{className:V.default.name},m.name),C.default.createElement("div",null,m.signature)),C.default.createElement("div",{className:V.default.detail},C.default.createElement("p",null,C.default.createElement("i",{className:V.default.title}),m.title),C.default.createElement("p",null,C.default.createElement("i",{className:V.default.group}),m.group),C.default.createElement("p",null,C.default.createElement("i",{className:V.default.address}),m.geographic.province.label,m.geographic.city.label)),C.default.createElement(h.default,{dashed:!0}),C.default.createElement("div",{className:V.default.tags},C.default.createElement("div",{className:V.default.tagsTitle},"\u6807\u7b7e"),m.tags.concat(t).map(function(e){return C.default.createElement(f.default,{key:e.key},e.label)}),a&&C.default.createElement(o.default,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:n,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&C.default.createElement(f.default,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},C.default.createElement(i.default,{type:"plus"}))),C.default.createElement(h.default,{style:{marginTop:16},dashed:!0}),C.default.createElement("div",{className:V.default.team},C.default.createElement("div",{className:V.default.teamTitle},"\u56e2\u961f"),C.default.createElement(c.default,{spinning:v},C.default.createElement(s.default,{gutter:36},E.map(function(e){return C.default.createElement(u.default,{key:e.id,lg:24,xl:12},C.default.createElement(N.default,{to:e.href},C.default.createElement(d.default,{size:"small",src:e.logo}),e.member))}))))):"loading...")),C.default.createElement(u.default,{lg:17,md:24},C.default.createElement(l.default,{className:V.default.tabsCard,bordered:!1,tabList:k,activeTabKey:y.pathname.replace("".concat(b.path,"/"),""),onTabChange:this.onTabChange,loading:p},j))))}}]),t}(C.PureComponent),m=g))||m),S=z;t.default=S}}]);