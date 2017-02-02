// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"themes/PlateauTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack dojox/gesture/swipe dojox/gesture/tap jimu/utils".split(" "),function(m,c,p,a,k,b,l,s,t,e,h,n,u){var r=0;return m([s,t],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new e({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();k(this.pagesNode,h.end,c.hitch(this,function(a){r<this.maximumPages-1&&a.dx&&0>a.dx?(r++,this._selectPage(r)):a.dx&&(0<a.dx&&0<r)&&(r--,this._selectPage(r))}));this.resize()},resize:function(){var b=this._calculateGridParam(),e;if(null!==b){a.setStyle(this.domNode,u.getPositionStyle(b.position));this.nodeWidth=
b.cellSize-this.margin;if(!this.oldGridParam||this.oldGridParam.rows!==b.rows||this.oldGridParam.cols!==b.cols)this.clearPages(),this.createPages(b);this.nodes.forEach(c.hitch(this,function(a,e){this.setItemNodePosition(a,e,b)}));this.oldGridParam=b;e=l("div.close",this.domNode)[0];a.setStyle(e,{width:0.25*this.nodeWidth+"px",height:0.25*this.nodeWidth+"px"})}else this.oldGridParam=null,a.setStyle(this.domNode,u.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0;!window.appInfo.isRunInMobile&&
(760<window.innerWidth&&this.numWidget&&8>=this.numWidget.length)&&this.hide()},setItemNodePosition:function(b,e,q){var f,n,h=48,k=16;f=0===e%q.cols?0:this.margin/2;n=e%(q.rows*q.cols)<q.cols?0:this.margin/2;e={};"number"===typeof this.nodeWidth&&(e.width=this.nodeWidth+"px",e.height=this.nodeWidth+"px");"number"===typeof f&&(window.isRTL?e.marginRight=f+"px":e.marginLeft=f+"px");"number"===typeof n&&(e.marginTop=n+"px");if(f=l("img",b)[0])q.iconScaled&&(h*=this.nodeWidth/120),a.setStyle(f,{width:h+
"px",height:h+"px"});if(h=l("div.node-label",b)[0])q.showLabel?(q.iconScaled&&(k*=this.nodeWidth/120),a.setStyle(h,{"font-size":k+"px",display:"block"})):a.setStyle(h,{"font-size":k+"px",display:"none"});a.setStyle(b,e)},clearPages:function(){p.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);b.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var e,q,f,h;this.maximumPages=e=Math.ceil(this.items.length/(a.rows*a.cols));for(q=0;q<e;q++)f=b.create("div",
{"class":"page"}),this.createPageItems(q,f,a),this.viewStack.addView(f),1<e&&(h=b.create("div",{"class":"point"},this.pointsNode),this.own(k(h,"click",c.hitch(this,this._onPageNodeClick,q)))),this.pages.push({pageNode:f,pointNode:h});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},_selectPage:function(b){1<this.pages.length&&(l(".point",this.domNode).removeClass("point-selected  jimu-main-background"),a.addClass(this.pages[b].pointNode,"point-selected jimu-main-background"));
this.viewStack.switchView(this.pages[b].pageNode)},createPageItems:function(a,b,e){var f,h;f=this.items.length;h=e.rows*e.cols;e=a*h;a=(a+1)*h;h=a-f;for(a=Math.min(a,f);e<a;e++)this.createItemNode(e,b);for(e=f;e<f+h;e++)this.createEmptyItemNode(b)},createItemNode:function(a,e){var h,f;f=this.items[a];h=b.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",title:f.label,settingId:f.id},e);b.create("img",{src:f.icon},h);b.create("div",{"class":"node-label",title:f.label,innerHTML:u.stripHTML(f.label)},
h);h.config=f;this.own(k(h,n,c.hitch(this,function(){this.onNodeClicked(h)})));this.nodes.push(h)},createEmptyItemNode:function(a){a=b.create("div",{"class":"icon-node jimu-float-leading  jimu-main-background"},a);this.nodes.push(a);return a},createCloseBtn:function(){var a;a=b.create("div",{"class":"close"},this.domNode);b.create("div",{"class":"close-inner jimu-main-background"},a);k(a,"click",c.hitch(this,function(){this.hide()}));return a},hide:function(){r=0;a.setStyle(this.domNode,"display",
"none")},show:function(){a.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},_calculateGridParam:function(){var b,e,h,f,n=!1,k=!0;b=a.getContentBox(jimuConfig.mapId);e=Math.min(b.w,b.h)-40;if(360<=e)f=120;else{f=Math.floor(e/3);if(10>f)return null;n=!0;80>f&&(k=!1)}e=Math.floor((b.h-40)/f);h=Math.floor((b.w-40)/f);e=4<e?4:e;e=3>e?3:e;h=3>e?3:4<h?4:h;return{rows:e,cols:h,cellSize:f,iconScaled:n,showLabel:k,position:{top:(b.h-f*e)/2,bottom:(b.h-f*e)/2,left:(b.w-f*h)/2,
right:(b.w-f*h)/2,width:f*h-this.margin*(h-1)/2,height:f*e-this.margin*(e-1)/2,zIndex:111}}}})})},"dojox/gesture/swipe":function(){define(["dojo/_base/kernel","dojo/_base/declare","./Base","../main"],function(m,c,p,a){m.experimental("dojox.gesture.swipe");m=c(p,{defaultEvent:"swipe",subEvents:["end"],press:function(a,b){b.touches&&2<=b.touches.length?delete a.context:(a.context||(a.context={x:0,y:0,t:0}),a.context.x=b.screenX,a.context.y=b.screenY,a.context.t=(new Date).getTime(),this.lock(b.currentTarget))},
move:function(a,b){this._recognize(a,b,"swipe")},release:function(a,b){this._recognize(a,b,"swipe.end");delete a.context;this.unLock()},cancel:function(a,b){delete a.context;this.unLock()},_recognize:function(a,b,l){if(a.context&&(a=this._getSwipeInfo(a,b)))a.type=l,this.fire(b.target,a)},_getSwipeInfo:function(a,b){var l,c,m={};c=a.context;m.time=(new Date).getTime()-c.t;l=b.screenX-c.x;c=b.screenY-c.y;if(0===l&&0===c)return null;m.dx=l;m.dy=c;return m}});a.gesture.swipe=new m;a.gesture.swipe.Swipe=
m;return a.gesture.swipe})},"dojox/gesture/Base":function(){define("dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom dojo/on dojo/touch dojo/has ../main".split(" "),function(m,c,p,a,k,b,l,s,t){m.experimental("dojox.gesture.Base");a.getObject("gesture",!0,t);return c(null,{defaultEvent:" ",subEvents:[],touchOnly:!1,_elements:null,constructor:function(b){a.mixin(this,b);this.init()},init:function(){this._elements=[];if(!s("touch")&&this.touchOnly)console.warn("Gestures:[",
this.defaultEvent,"] is only supported on touch devices!");else{var a=this.defaultEvent;this.call=this._handle(a);this._events=[a];p.forEach(this.subEvents,function(b){this[b]=this._handle(a+"."+b);this._events.push(a+"."+b)},this)}},_handle:function(a){var h=this;return function(n,c){var l=arguments;2<l.length&&(n=l[1],c=l[2]);if(!n||!n.nodeType&&!n.attachEvent&&!n.addEventListener)return b(n,a,c);var k=h._add(n,a,c);return{remove:function(){k.remove();h._remove(n,a)}}}},_add:function(e,h,n){var c=
this._getGestureElement(e);if(!c){var c={target:e,data:{},handles:{}},k=a.hitch(this,"_process",c,"press"),m=a.hitch(this,"_process",c,"move"),p=a.hitch(this,"_process",c,"release"),q=a.hitch(this,"_process",c,"cancel"),f=c.handles;this.touchOnly?(f.press=b(e,"touchstart",k),f.move=b(e,"touchmove",m),f.release=b(e,"touchend",p),f.cancel=b(e,"touchcancel",q)):(f.press=l.press(e,k),f.move=l.move(e,m),f.release=l.release(e,p),f.cancel=l.cancel(e,q));this._elements.push(c)}c.handles[h]=!c.handles[h]?
1:++c.handles[h];return b(e,h,n)},_getGestureElement:function(a){for(var b=0,c;b<this._elements.length;b++)if(c=this._elements[b],c.target===a)return c},_process:function(a,b,c){c._locking=c._locking||{};!c._locking[this.defaultEvent]&&!this.isLocked(c.currentTarget)&&(("INPUT"!=c.target.tagName||"radio"==c.target.type||"checkbox"==c.target.type)&&"TEXTAREA"!=c.target.tagName&&c.preventDefault(),c._locking[this.defaultEvent]=!0,this[b](a.data,c))},press:function(a,b){},move:function(a,b){},release:function(a,
b){},cancel:function(a,b){},fire:function(a,c){a&&c&&(c.bubbles=!0,c.cancelable=!0,b.emit(a,c.type,c))},_remove:function(a,b){var c=this._getGestureElement(a);if(c&&c.handles){c.handles[b]--;var l=c.handles;p.some(this._events,function(a){return 0<l[a]})||(this._cleanHandles(l),c=p.indexOf(this._elements,c),0<=c&&this._elements.splice(c,1))}},_cleanHandles:function(a){for(var b in a)a[b].remove&&a[b].remove(),delete a[b]},lock:function(a){this._lock=a},unLock:function(){this._lock=null},isLocked:function(a){return!this._lock||
!a?!1:this._lock!==a&&k.isDescendant(a,this._lock)},destroy:function(){p.forEach(this._elements,function(a){this._cleanHandles(a.handles)},this);this._elements=null}})})},"dojox/gesture/tap":function(){define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","./Base","../main"],function(m,c,p,a,k){m.experimental("dojox.gesture.tap");m=c(a,{defaultEvent:"tap",subEvents:["hold","doubletap"],holdThreshold:500,doubleTapTimeout:250,tapRadius:10,press:function(a,c){if(c.touches&&2<=c.touches.length)clearTimeout(a.tapTimeOut),
delete a.context;else{var k=c.target;this._initTap(a,c);a.tapTimeOut=setTimeout(p.hitch(this,function(){this._isTap(a,c)&&this.fire(k,{type:"tap.hold"});delete a.context}),this.holdThreshold)}},release:function(a,c){if(a.context&&this._isTap(a,c))switch(a.context.c){case 1:this.fire(c.target,{type:"tap"});break;case 2:this.fire(c.target,{type:"tap.doubletap"})}clearTimeout(a.tapTimeOut)},_initTap:function(a,c){a.context||(a.context={x:0,y:0,t:0,c:0});var k=(new Date).getTime();k-a.context.t<=this.doubleTapTimeout?
a.context.c++:(a.context.c=1,a.context.x=c.screenX,a.context.y=c.screenY);a.context.t=k},_isTap:function(a,c){var k=Math.abs(a.context.x-c.screenX),m=Math.abs(a.context.y-c.screenY);return k<=this.tapRadius&&m<=this.tapRadius}});k.gesture.tap=new m;k.gesture.tap.Tap=m;return k.gesture.tap})},"themes/PlateauTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/PlateauTheme/widgets/HeaderController/Widget.html":'\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section jimu-float-leading jimu-main-background" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/PlateauTheme/widgets/HeaderController/css/style.css":'.jimu-widget-header-controller {box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section {height: 100%; overflow: hidden; width: calc(100% - 360px);}.jimu-widget-header-controller .container-section {height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo {cursor: pointer;}.jimu-widget-header-controller .hide-logo {display: none;}.jimu-widget-header-controller .titles {height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title {text-align: center; height: 100%;}.jimu-widget-header-controller .jimu-subtitle {text-align: center; height: 100%;}.jimu-widget-header-controller .links {height: 100%; overflow: hidden;}.jimu-widget-header-controller .dynamic-section, .jimu-widget-header-controller .signin-section {height: 100%;}.jimu-widget-header-controller .links .jimu-link {height: 100%;}.jimu-widget-header-controller .signin-section .jimu-link {color: #d9dde0;}.jimu-widget-header-controller .icon-node {cursor: pointer; opacity: 1; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img {height: 20px; width: 20px;}.jimu-widget-header-controller .icon-node:first-child {border: none;}.jimu-widget-header-controller .icon-node:hover {opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected {background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle {position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu {box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item {overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover {background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img {width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label {cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title {}.popup-links .logo {height: 30px;}.popup-links .title {color: #fff; text-align: center; font-size: 16px; width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line {width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section {width: 100%; height: 66px;}.popup-links a {color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a {color: #d9dde0;}.jimu-header-more-popup {position: absolute; border-radius: 2px; z-index: 111; background-color: #FFFFFF;}.jimu-header-more-popup .pages {position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points {position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner {display: inline-block; overflow: hidden;}.jimu-header-more-popup .point {float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-header-more-popup .point-selected {background-color: #485566;}.jimu-header-more-popup .page {position: relative; overflow: hidden;}.jimu-header-more-popup .close {position: absolute; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #FFFFFF; cursor: pointer;}.jimu-rtl .jimu-header-more-popup .close {left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner {width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background-image: url("images/close.png"); background-repeat: no-repeat; background-position: center center; background-size: 13px;}.jimu-header-more-popup .icon-node {cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected {background-color: red;}.jimu-header-more-popup img {width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label {width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block; height: 20px;}@media screen and (max-width:320px){.jimu-header-more-popup .close-inner {background-size: 9px;}}@media screen and (max-width:760px) {.jimu-header-more-popup .node-label {font-size: 13px !important; height: 17px;} .jimu-widget-header-controller .header-section {width: calc(100% - 90px) !important;}}.jimu-more-icon-cover {z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.jimu-widget-header-controller .esriCTHidden {display: none;}.jimu-widget-header-controller .widget-open-symbol {height: 4px; width: 4px; border-radius: 4px; margin: auto; color: #FFF; background-color: #FFF;}',
"*now":function(m){m(['dojo/i18n!*preload*themes/PlateauTheme/widgets/HeaderController/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/Deferred dojo/mouse dojo/topic dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dijit/registry dojo/NodeList-manipulate".split(" "),function(m,c,p,a,k,b,l,s,t,e,h,n,u,r,v,x,q,f,y,z,A){return m([u,r],{baseClass:"jimu-widget-header-controller jimu-main-background",
maxIconCount:-1,createMoreIcon:!1,switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.position&&this.position.height&&(this.height=this.position.height);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,
"hide-logo"));this.appConfig.title&&(this.appConfig.title=f.sanitizeHTML(this.appConfig.title));this.appConfig.subtitle&&(this.appConfig.subtitle=f.sanitizeHTML(this.appConfig.subtitle));this.switchableElements.title.innerHTML=this.appConfig.title?this.appConfig.title:"";this.switchableElements.title.title=this.appConfig.title?this.appConfig.title:"";this.appConfig.subtitle&&""!==c.trim(this.appConfig.subtitle)?(this.switchableElements.subtitle=this.subtitleNode,this.switchableElements.subtitle.innerHTML=
this.appConfig.subtitle):(this.subtitleNode.innerHTML="",a.setStyle(this.subtitleNode,"display","none"));this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(l(this.domNode,t.enter,c.hitch(this,function(){var a="",d=q.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");q.isArcGIScom(d)&&(d="ArcGIS.com");d&&(a=this.nls.signInTo+" "+d);this.signinLinkNode.title=a})))},startup:function(){this.inherited(arguments);this.resize()},onAction:function(a,d){if("highLight"===
a&&d){var c=b('div[settingid\x3d"'+d.widgetId+'"]',this.domNode)[0];this._highLight(c)}"removeHighLight"===a&&this._removeHighLight()},onSignIn:function(g){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=g.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",
"none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",""),b("a",this.popupUserNameNode).html(g.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);x.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(c.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),c.hitch(this,function(a){console.error(a)}))},_onSignOut:function(g){a.setStyle(this.signinLinkNode,
"display","");a.setAttr(this.signinLinkNode,"innerHTML",g);a.setStyle(this.userNameLinkNode,"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",g),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),b("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){var g=0,d=a.getStyle(this.headerNode,
"float"),w=a.getStyle(this.logoNode,"float"),f=a.getStyle(this.titlesNode,"float"),h=a.getStyle(this.linksNode,"float");d&&"none"!==d&&w&&"none"!==w&&f&&"none"!==f&&h&&"none"!==h?this._resize():setTimeout(c.hitch(this,this.resize),200);b(".jimu-widget-attributetable")[0]&&(g=b(".jimu-widget-attributetable")[0].clientHeight);g?e.publish("changeMapPosition",{bottom:g}):e.publish("changeMapPosition",{bottom:"0px"})},_resize:function(){var g=a.getContentBox(this.domNode);this._showSwitchableElements(["title",
"links","subtitle"]);this._updateTitleNodeWidth();this._getTitleContainerWidth(g);this._createIconNodes(g);this._updateTitleNodeWidth();this.morePane&&this.morePane.resize();this.popupLinkNode&&a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"})},_updateTitleNodeWidth:function(){var g;g=a.getContentBox(this.domNode);g=this._getHeaderContainerWidth(g)-this._getLogoWidth()-this._getTitlesWidth()-this._getSubtitleWidth()-this._getLinkWidth();g=this._getTitlesWidth()+g+40;
"none"===a.getStyle(this.subtitleNode,"display")&&(g+=20,"none"===a.getStyle(this.linksNode,"display")&&(g+=20));150>g?a.setStyle(this.titleNode,"max-width","150px"):a.setStyle(this.titleNode,"max-width",g+"px")},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(a.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();
a.destroy(this.popupLinkNode);this.inherited(arguments)},onAppConfigChanged:function(a,d,b){switch(d){case "attributeChange":this._onAttributeChange(a,b);break;default:return}this.appConfig=a;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(a){if(0!==a.length){var d=this.getConfigById(a[0]);d&&(this.openedId=a[0],d.widgets&&"openAll"===d.openType?this._showIconContent(d):d.widgets||this._showIconContent(d))}},_onLogoLoad:function(){this.resize()},
_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var d=n.getMarginBox(a);this.hlDiv=h.create("div",{style:{position:"absolute",left:d.l+"px",top:d.t+"px",width:d.w+"px",height:d.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(h.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(g,d){var b;"title"in d&&d.title!==this.appConfig.title&&(b=f.sanitizeHTML(d.title),this.titleNode.innerHTML=b,this.titleNode.title=b);"subtitle"in d&&
d.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=f.sanitizeHTML(d.subtitle));"logo"in d&&d.logo!==this.appConfig.logo&&(d.logo?(a.setAttr(this.logoNode,"src",d.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,"hide-logo")));"links"in d&&this._createDynamicLinks(d.links)},_setElementsSize:function(){a.setStyle(this.logoNode,{height:"30px",marginTop:(this.height-30)/2+"px"});a.setStyle(this.titleNode,{lineHeight:this.height+
"px"});a.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});b(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_processGroupSetting:function(){this._setMapCanvasAreaToDefault();p.forEach(this.appConfig.widgetPool.groups,function(a){var d;a:{if(this.config.groupSetting)for(d=0;d<this.config.groupSetting.length;d++)if(this.config.groupSetting[d].label===a.label){d=this.config.groupSetting[d].type;break a}d="openAll"}a.openType=d},this)},_createDynamicLinks:function(g){if(window.isRTL){var d=
[];p.forEach(g,function(a){d.unshift(a)});g=d}a.empty(this.dynamicLinksNode);0>=g.length?(a.setStyle(this.linksNode,"display","none"),this.switchableElements.hasOwnProperty("links")&&delete this.switchableElements.links):(this.switchableElements.links=this.linksNode,p.forEach(g,function(g){a.create("a",{href:g.url,target:"_blank",innerHTML:f.sanitizeHTML(g.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this))},_showSwitchableElements:function(g){var d=
this.switchableElements,b;for(b in d)d.hasOwnProperty(b)&&(-1<g.indexOf(b)?(a.setStyle(d[b],"display","block"),d[b].visible=!0):(a.setStyle(d[b],"display","none"),d[b].visible=!1));this.logoClickHandle&&this.logoClickHandle.remove();0>g.indexOf("links")?this.logoClickHandle=l(this.logoNode,"click",c.hitch(this,this._onLogoClick)):(this.popupLinksVisible&&this._hidePopupLink(),a.setStyle(this.logoNode,{cursor:"default"}))},_switchSignin:function(){var a=v.getPortalCredential(this.appConfig.portalUrl);
if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,"display","");
window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"});this.popupLinksVisible=!0},_createPopupLinkNode:function(){var g,d;a.getContentBox(jimuConfig.mainPageId);g=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(g,{right:0,left:"50px"}):a.setStyle(g,{left:0,right:"50px"});
d=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},g);a.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?this.appConfig.logo:this.folderUrl+"images/app-logo.png",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},d);a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1",innerHTML:f.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},d);p.forEach(this.appConfig.links,
function(a){this._createLinkNode(g,a,!1)},this);this._createLinkNode(g,{label:"",url:"#"},!1);return g},_createLinkNode:function(g,d,b){g=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',g);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',g);b=a.place('\x3cdiv class\x3d"'+(b?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',g);a.create("a",{href:d.url,"class":"jimu-ellipsis",target:"_blank",innerHTML:f.sanitizeHTML(d.label),title:f.sanitizeHTML(d.label),style:{lineHeight:"66px"}},b);
return g},_onSigninClick:function(){v.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new y({message:this.nls.cantSignOutTip}):v.signOutAll()},_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return a.getMarginBox(this.headerNode).w},_getIconContainerWidth:function(){return a.getMarginBox(this.containerNode).w},_getTitlesWidth:function(){return a.getMarginBox(this.titlesNode).w},_getLinkWidth:function(){return a.getMarginBox(this.linksNode).w},
_getLogoWidth:function(){return a.getMarginBox(this.logoNode).w+12},_getSubtitleWidth:function(){return a.getMarginBox(this.subtitleNode).w},_getHeaderContainerWidth:function(a){var d=this._getIconContainerWidth(),b=this._getLogoWidth();return a.w-d-b},_getTitleContainerWidth:function(a){a=this._getHeaderContainerWidth(a);var d=this._getTitlesWidth(),b=this._getLinkWidth();a<d+b&&(this.switchableElements.hasOwnProperty("links")&&this.switchableElements.links.visible?(this._showSwitchableElements(["title",
"subtitle"]),d=this._getTitlesWidth(),a<d&&this._showSwitchableElements(["title"])):this._showSwitchableElements(["title"]))},_createIconNodes:function(g,d){b(".icon-node",this.containerNode).remove();this._closeDropMenu();var c,e,f=this.getAllConfigs();this.iconWidth=g.h;this._getTitleContainerWidth(g);c=360;c=760>=window.innerWidth?90:360;a.setStyle(this.containerNode,{width:c+"px"});this.maxIconCount=760>=window.innerWidth?2:Math.floor(8);this.maxIconCount>=f.length?(this.headerIconCount=f.length,
this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,this.createMoreIcon=!0);if(this.createMoreIcon){this._createIconNode({label:this.nls.more});if(!this.openAtStartWidget)for(c=0;c<f.length;c++)f[c].openAtStart&&(e=f[c]);!d&&(this.openedId&&this.getConfigById(this.openedId))&&(e=this.getConfigById(this.openedId));e&&this._moveConfigToHeader(e)}var h;for(c=this.headerIconCount-1;0<=c;c--){e=f[c];var k=this._createIconNode(e);e.openAtStart&&(h=k)}h&&!this.openAtStartWidget&&(this._onIconClick(h),
this.openAtStartWidget=h.config.name);this.openedId&&(this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel)&&(f=this._getIconNodeById(this.openedId),h=this.widgetManager.getWidgetById(this.openedId),f&&h?this._setOffPanelWidgetPosition(f,h):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(g){var d,e,f;e=g.label===this.nls.more?this.folderUrl+"images/more_icon.png":g.icon;d=a.create("div",{"class":"icon-node jimu-float-trailing",
title:g.label,settingId:g.id,style:{width:"45px",height:this.height+"px",textAlign:"center"}},this.containerNode);f=a.create("div",{"class":"widget-symbol-div",style:{width:"100%"}},d);a.create("img",{src:e,style:{marginTop:(this.height-30)/2+3+"px",marginBottom:"3px"}},f);e=a.create("div",{"class":"widget-open-symbol esriCTHidden"},d);g.label===this.nls.more?l(d,"click",c.hitch(this,this._showMorePane,g)):l(d,"click",c.hitch(this,function(){this._onIconClick(d)}));d.config=g;d.config.widgets&&(1<
d.config.widgets.length&&"dropDown"===d.config.openType)&&this._createDropTriangle(d);this.openedId===g.id&&(a.addClass(d,"jimu-state-selected"),b(".widget-open-symbol",this.domNode).addClass("esriCTHidden"),a.removeClass(e,"esriCTHidden"),d.config.widgets&&(1<d.config.widgets.length&&"dropDown"===d.config.openType)&&this._openDropMenu(d));return d},_createDropTriangle:function(g){var b=a.getMarginBox(g);a.create("div",{"class":"drop-triangle",style:{left:b.l+b.w/2-4+"px"}},g)},_onIconClick:function(a){!a.config.widgets||
1===a.config.widgets.length||"openAll"===a.config.openType?this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(c.hitch(this,function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id):this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a)},_closeDropMenu:function(){this.dropMenuNode&&(a.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(b){this.dropMenuNode=
a.create("div",{"class":"jimu-drop-menu jimu-main-background",title:b.config.label,style:{position:"absolute",zIndex:"101"}});a.place(this.dropMenuNode,this.containerNode);p.forEach(b.config.widgets,function(a){this._createDropMenuItem(a)},this);this._setDropMenuPosition(b);this.morePane&&this.morePane.hide()},_createDropMenuItem:function(b){var d=a.create("div",{"class":"menu-item",title:f.sanitizeHTML(b.label),style:{height:this.height+"px"}},this.dropMenuNode);a.create("img",{"class":"jimu-float-leading",
src:b.icon},d);a.create("div",{"class":"label jimu-float-leading",innerHTML:f.sanitizeHTML(b.label)},d);this.own(l(d,"click",c.hitch(this,function(){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(c.hitch(this,function(){this._showIconContent(d.config)})):this._showIconContent(d.config)})));d.config=b;return d},_setDropMenuPosition:function(b){var d={},d=a.getMarginBox(this.dropMenuNode),d=this._getDropdownPosition(b,d);d.zIndex=101;a.setStyle(this.dropMenuNode,f.getPositionStyle(d))},
_getDropdownPosition:function(b,d){var c={},e=a.getMarginBox(b),f=a.getMarginBox(this.domNode);c.top=this.height+1;window.isRTL?c.right=0>e.l+e.w-d.w?0:e.l+e.w-d.w:e.l+d.w>f.w?c.right=0:c.left=e.l;return c},_switchNodeToOpen:function(c){c=this._getIconNodeById(c);b(".icon-node",this.domNode).removeClass("jimu-state-selected");b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");a.addClass(c,"jimu-state-selected");a.removeClass(c.children[1],"esriCTHidden");this._showIconContent(c.config)},
_switchNodeToClose:function(a){b(".icon-node",this.domNode).removeClass("jimu-state-selected");this._setMapCanvasAreaToDefault();b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");var d=this.appConfig.getConfigElementById(a);if(d)return!1===d.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new s,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new s;a.resolve();return a},_setMapCanvasAreaToDefault:function(){if(window.appInfo.isRunInMobile){var a=0;b(".jimu-widget-attributetable")[0]&&
(a=b(".jimu-widget-attributetable")[0].clientHeight);a?e.publish("changeMapPosition",{bottom:a}):e.publish("changeMapPosition",{bottom:"0px"})}else e.publish("changeMapPosition",{right:"0px"})},_setMapCanvasArea:function(){if(window.appInfo.isRunInMobile){var a=0;b(".jimu-widget-attributetable")[0]&&(a=b(".jimu-widget-attributetable")[0].clientHeight);if(this.panelManager&&this.panelManager.panels&&this.panelManager.panels[0]&&"normal"===this.panelManager.panels[0].windowState){var d=this.panelManager.getPositionOnMobile(this);
a&&a>d.top?e.publish("changeMapPosition",{bottom:a}):e.publish("changeMapPosition",{bottom:d.top})}else 36<a?e.publish("changeMapPosition",{bottom:a}):window.hasOwnProperty("ontouchstart")||void 0!==window.ontouchstart||760>=window.innerWidth?e.publish("changeMapPosition",{bottom:"36px"}):e.publish("changeMapPosition",{bottom:"0px"})}else this.panelManager&&this.panelManager.activePanel&&"minimized"===this.panelManager.activePanel.windowState?e.publish("changeMapPosition",{right:"0px"}):(e.publish("changeMapPosition",
{right:"360px"}),this._resizeAttributeTableinRTL())},_resizeAttributeTableinRTL:function(){b(".jimu-widget-attributetable")[0]&&(window.isRTL?a.setStyle(b(".jimu-widget-attributetable")[0],"right","0px"):a.setStyle(b(".jimu-widget-attributetable")[0],"left","0px"),b(".dijitTabContainer",b(".jimu-widget-attributetable")[0])[0]&&A.byId(b(".dijitTabContainer",b(".jimu-widget-attributetable")[0])[0].id).resize())},_getIconNodeById:function(a){a=b('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==
a.length)return a[0]},_unSelectIcon:function(a){b('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(e){!1===e.inPanel?this.widgetManager.loadWidget(e).then(c.hitch(this,function(d){this.openedId=e.id;var f=this._getIconNodeById(e.id);a.setStyle(d.domNode,"zIndex",101);this._setOffPanelWidgetPosition(f,d);this.widgetManager.openWidget(d);this.own(k.after(d,"onClose",c.hitch(this,function(){b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");
this._setMapCanvasAreaToDefault();this._unSelectIcon(e.id)})))})):(this._setMapCanvasArea(),this.panelManager.showPanel(e).then(c.hitch(this,function(d){var f;this.openedId=e.id;f=this._getIconNodeById(this.openedId);b(".icon-node",this.domNode).removeClass("jimu-state-selected");b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");a.addClass(f,"jimu-state-selected");a.removeClass(f.children[1],"esriCTHidden");this.own(k.after(d,"onClose",c.hitch(this,function(){this._unSelectIcon(e.id);
this._setMapCanvasAreaToDefault()})))})))},_setOffPanelWidgetPosition:function(a,b){var c=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(b));b.setPosition(c,this.containerNode)},_showMorePane:function(){var b,d,e=[],f=this.getAllConfigs();for(b=this.headerIconCount;b<f.length;b++)d=f[b],d.id!==this.openedId&&e.push(d);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&a.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new z({openedId:this.openedId,
items:e,numWidget:f});this._createCoverNode();a.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();k.after(this.morePane,"onNodeClicked",c.hitch(this,function(b){this._moveConfigToHeader(b.config);this._createIconNodes(a.getContentBox(this.domNode),b.config.id);this._onIconClick(this._getIconNodeById(b.config.id))}),!0);k.after(this.morePane,"hide",c.hitch(this,function(){a.destroy(this.moreIconPaneCoverNode)}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),c=a.index;
a.index=b[this.headerIconCount-1].index;b[this.headerIconCount-1].index=c},_createCoverNode:function(){this.moreIconPaneCoverNode=a.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});