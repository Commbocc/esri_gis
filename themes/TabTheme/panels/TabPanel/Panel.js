// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/html","dojo/query","jimu/BaseWidgetPanel","./TabWidgetFrame"],function(c,d,e,f,g){return c([f],{baseClass:"jimu-panel jimu-tab-panel jimu-main-background jimu-panel-content",createFrame:function(a){a=new g({label:a.label});this._setFrameSize(a);return a},_setFrameSize:function(a){var b=100*(1/(this.getChildren().length+1));e(".tab-widget-frame",this.containerNode).style("height",b+"%");d.setStyle(a.domNode,"height",b+"%")}})});