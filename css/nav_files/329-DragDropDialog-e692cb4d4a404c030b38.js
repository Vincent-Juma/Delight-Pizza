(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{2682:function(a,e,t){"use strict";t.r(e);var n=t(23),o=t(24),l=t(26),r=t(25),s=t(27),c=t(7),i=t(2),d=t(0),p=t.n(d),g=t(11),D=t.n(g),u=t(177),b=t(47),m=t(178),O=t(554),h=t(2673),v=t.n(h),j=function(a){function e(){var a,t;Object(n.a)(this,e);for(var o=arguments.length,s=new Array(o),d=0;d<o;d++)s[d]=arguments[d];return t=Object(l.a)(this,(a=Object(r.a)(e)).call.apply(a,[this].concat(s))),Object(i.a)(Object(c.a)(Object(c.a)(t)),"state",{isADrag:!1}),Object(i.a)(Object(c.a)(Object(c.a)(t)),"preventDefaults",(function(a){a.preventDefault(),a.stopPropagation()})),Object(i.a)(Object(c.a)(Object(c.a)(t)),"handleDialogEscKey",(function(){t.props.toggleDialog(),t.setState({isADrag:!1})})),Object(i.a)(Object(c.a)(Object(c.a)(t)),"handleDragEnter",(function(a){t.preventDefaults(a),t.setState({isADrag:!0})})),Object(i.a)(Object(c.a)(Object(c.a)(t)),"handleDragLeave",(function(a){t.preventDefaults(a),t.props.shouldCloseOnDragLeave&&t.props.toggleDialog(),t.setState({isADrag:!1})})),Object(i.a)(Object(c.a)(Object(c.a)(t)),"handleDrop",(function(a){t.preventDefaults(a),t.setState({isADrag:!1}),t.props.processDrop({e:a,files:a.dataTransfer.files})})),t}return Object(s.a)(e,a),Object(o.a)(e,[{key:"render",value:function(){var a=this.state.isADrag,e=this.props,t=e.close,n=e.children,o=e.isLoading,l=e.errorText,r=e.uploadError,s=e.isDialogOpen,c=e.toggleDialog,i=e.loadingHelpText,d=e.clearUploadError,g=e.supportedHelpText,h=e.dataTrackSection,j=e.dataAutomation,f=e.processDrop;return p.a.createElement(u.a,{active:s,className:D()(v.a.dddDialog),onCloseButtonSelect:c,onEscKeyDown:this.handleDialogEscKey,onOverlayClick:c,theme:{dialogContent:v.a.dddDialogContent,mainContentContainer:v.a.mainContentContainer,closeButton:v.a.closeButton}},p.a.createElement("div",{className:D()(v.a.dddDialogDropArea,a&&v.a.dddDialogPulse,!!o&&v.a.displayNone),onDragEnter:this.handleDragEnter,"data-automation":j.root},p.a.createElement("div",{className:D()(v.a.dddDialogDropMask,!a&&v.a.displayNone),onDragLeave:this.handleDragLeave,onDragOver:this.preventDefaults,onDrop:this.handleDrop}),p.a.createElement(b.a,{className:D()(v.a.dddDialogCloseBtn),disabled:a,icon:"close",onClick:c,"data-track-action":"click","data-track-section":h,"data-track-label":"close","data-automation":j.close}),p.a.createElement("div",{className:D()(v.a.dddDialogBorder)},p.a.cloneElement(n,{toggleDialog:c,isADrag:a,uploadHandler:f}),p.a.createElement("div",{className:D()(v.a.dddDialogFileRequirements)},g),p.a.createElement(O.a,{active:r,className:D()(v.a.dddDialogErrorText),type:"warning",label:l,timeout:null,actions:[{label:t,onClick:d}]}))),p.a.createElement("div",{className:D()(v.a.dddDialogContainer,!o&&v.a.displayNone)},p.a.createElement(m.a,null),p.a.createElement("h4",{className:D()(v.a.dddDialogHelpText)},i)))}}]),e}(d.Component);e.default=j}}]);
//# sourceMappingURL=329-DragDropDialog-e692cb4d4a404c030b38.js.map