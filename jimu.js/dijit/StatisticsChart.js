// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/StatisticsChart.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"results-header" data-dojo-attach-point\x3d"resultsHeader" style\x3d"margin-bottom:15px;"\x3e\r\n\t\t\x3cdiv tabindex\x3d"0" class\x3d"chart-title jimu-float-leading" data-dojo-attach-point\x3d"chartTitle"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"paging-section jimu-float-leading"\x3e\r\n\t\t\t\x3cul tabindex\x3d"0" data-dojo-attach-point\x3d"pagingUl" data-dojo-attach-event\x3d"onclick:_onPagingUlClicked, onkeydown:_onPagingUlKeydown"\x3e\x3c/ul\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-float-trailing"\x3e\r\n\t\t\t\x3cdiv role\x3d"button" tabindex\x3d"0" class\x3d"settings jimu-float-leading" data-dojo-attach-point\x3d"settingsIcon"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv role\x3d"button" tabindex\x3d"0" class\x3d"zoomin jimu-float-trailing" data-dojo-attach-point\x3d"zoominIcon"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"chartSection" class\x3d"chart-section"\x3e\r\n\t\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%;height:100%;table-layout:fixed;"\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"arrow-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.previous}" class\x3d"chart-section-item left-arrow arrow" data-dojo-attach-point\x3d"leftArrow" data-dojo-attach-event\x3d"onclick:_onLeftArrowClicked, onkeydown:_onLeftArrowKeydown"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"content-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"chart-section-item chart-container" data-dojo-attach-point\x3d"chartContainer"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"chart-real-container" data-dojo-attach-point\x3d"chartRealContainer"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv tabindex\x3d"0" class\x3d"description-container" data-dojo-attach-point\x3d"descriptionContainer"\x3e/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"fiald-render-info" data-dojo-attach-point\x3d"faildRenderInfo"\x3e\r\n\t\t\t\t\t\t\t${nls.fieldDisplayChartTip}\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"arrow-td"\x3e\r\n\t\t\t\t\t\t\x3cdiv tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.next}" class\x3d"chart-section-item right-arrow arrow" data-dojo-attach-point\x3d"rightArrow" data-dojo-attach-event\x3d"onclick:_onRightArrowClicked, onkeydown:_onRightArrowKeydown"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/Deferred dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/_base/Color dijit/popup dijit/_WidgetBase dijit/TooltipDialog dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/StatisticsChart.html esri/lang esri/graphic esri/symbols/jsonUtils esri/layers/FeatureLayer jimu/utils jimu/clientStatisticsUtils jimu/dijit/Chart jimu/dijit/_StatisticsChartSettings dojo/keys dijit/focus jimu/dijit/LoadingIndicator".split(" "),
function(r,B,C,D,f,h,g,u,t,z,E,F,G,H,I,J,K,w,A,m,x,L,M,p,v){return D([E,G,H,B],{baseClass:"jimu-dijit-statistics-chart",templateString:I,theme:"light",noMoreThanOneChartClassName:"no-more-than-one-chart",hasTitleClassName:"has-title",charts:null,paramsDijits:null,tooltipDialogs:null,currentChartIndex:-1,tempGraphics:null,maxPreviewFeaturesCount:20,tooltipColor:"green",floatNumberFieldDecimalPlace:null,popupFieldInfosObj:null,config:null,features:null,featureLayer:null,map:null,fontColor:"#333333",
isBigPreview:!1,showSettingIcon:!1,showZoomIcon:!1,zoomToFeaturesWhenClick:!1,initialChartIndex:0,postMixInProperties:function(){this.nls=window.jimuNls.statisticsChart;f.mixin(this.nls,window.jimuNls.common);this.charts=[];this.paramsDijits=[];this.tooltipDialogs=[];this.isBigPreview&&(this.showZoomIcon=!1)},postCreate:function(){this.inherited(arguments);this.showSettingIcon?(this.own(r(document.body,"click",f.hitch(this,this._onDocumentBodyClick))),this.own(r(this.settingsIcon,"keydown",f.hitch(this,
function(a){a.keyCode===p.ENTER?this._onSettingsIconClicked():a.keyCode===p.TAB&&a.shiftKey&&(a.preventDefault(),v.focus(this.pagingUl))})))):g.destroy(this.settingsIcon);this.showZoomIcon?(this.own(r(this.zoominIcon,"click",f.hitch(this,function(){this.emit("zoomin")}))),this.own(r(this.zoominIcon,"keydown",f.hitch(this,function(a){a.keyCode===p.ENTER&&this.emit("zoomin")})))):g.destroy(this.zoominIcon);this.isBigPreview&&(this.chartRealContainer.style.maxHeight="auto",g.addClass(this.domNode,"big-preview"));
this.zoominIcon.title=this.nls.enlarge;this.settingsIcon.title=this.nls.setting;g.addClass(this.domNode,this.noMoreThanOneChartClassName)},destroy:function(){this.clear();this.inherited(arguments)},resize:function(a,b){if(0<a||"string"===typeof a&&0<a.length)this.domNode.style.width=a;if(0<b||"string"===typeof b&&0<b.length)this.domNode.style.height=b;this._resize()},resizeByParent:function(){this.domNode.style.width="100%";this.domNode.style.height="100%";this._resize()},_resize:function(){this._calculateChartBox();
0<=this.currentChartIndex&&this._showChart(this.currentChartIndex)},createServerStatisticsCharts:function(a,b,c){var d=a.fields,e={type:"Table",fields:[]},k=f.clone(c),l=c.mode;"category"===l?(k.valueFields=[],e.fields=h.map(c.valueFields,f.hitch(this,function(a){var b=c.operation;"average"===b&&(b="avg");var d=a+"_"+m.upperCaseString(b);a=a+"_"+m.upperCaseString(b);k.valueFields.push(d);return{name:d,type:"esriFieldTypeDouble",alias:a}})),h.some(d,f.hitch(this,function(a){return a.name===c.categoryField?
(e.fields.push(a),!0):!1}))):"count"===l?(k.mode="feature",k.labelField=c.categoryField,a=a.fields[0].name+"_count",k.valueFields=[a],h.some(d,f.hitch(this,function(a){return a.name===c.categoryField?(e.fields.push(a),!0):!1})),e.fields.push({name:a,type:"esriFieldTypeInteger",alias:this.nls.count})):"field"===l&&(k.valueFields=[],e.fields=h.map(c.valueFields,f.hitch(this,function(a){var b=c.operation;"average"===b&&(b="avg");var d=a+"_"+m.upperCaseString(b);a=a+"_"+m.upperCaseString(b);k.valueFields.push(d);
return{name:d,type:"esriFieldTypeDouble",alias:a}})));return this._getLoadedLayer(e).then(f.hitch(this,function(a){this._createChartsAsync({featureLayer:a,features:b,config:k})}))},createClientCharts:function(a,b,c,d,e){e&&(this.featureLayerForChartSymbologyChart=e);return this._getLoadedLayer(a).then(f.hitch(this,function(a){this._createChartsAsync({featureLayer:a,features:b,config:c,popupFieldInfosObj:d})}))},_getLoadedLayer:function(a){var b=new C,c=null,c="string"===typeof a?new A(a):"esri.layers.FeatureLayer"===
a.declaredClass?a:new A({layerDefinition:f.clone(a),featureSet:null});c.loaded?b.resolve(c):this.own(r(c,"load",f.hitch(this,function(){b.resolve(c)})));return b},_createChartsAsync:function(a){setTimeout(f.hitch(this,function(){this._createCharts(a)}),0)},_createCharts:function(a){try{this.loading.hide();this.clear();var b=!1;a.features&&(b=!!a.features.isSelectedFeatures,a.features=h.filter(a.features,f.hitch(this,function(a){return!!a.attributes})));this.config=a.config;this.features=a.features;
this.featureLayer=a.featureLayer;this.popupFieldInfosObj=a.popupFieldInfosObj?a.popupFieldInfosObj:{};this.config.highLightColor||(this.config.highLightColor=b?"#ff0000":"#00ffff");this._calculateDecimalPlaceForFloatField();this.chartTitle.innerHTML=m.stripHTML(this.config.name||"");this.chartTitle.title=this.chartTitle.innerHTML;this.chartTitle.title?g.addClass(this.domNode,this.hasTitleClassName):g.removeClass(this.domNode,this.hasTitleClassName);if(this.config.description){g.setStyle(this.descriptionContainer,
"display","block");var c=m.stripHTML(this.config.description);this.descriptionContainer.innerHTML=c;this.descriptionContainer.title=c}else this.descriptionContainer.innerHTML="",this.descriptionContainer.title="",g.setStyle(this.descriptionContainer,"display","none");1>=a.config.types.length?g.addClass(this.domNode,this.noMoreThanOneChartClassName):g.removeClass(this.domNode,this.noMoreThanOneChartClassName);var d=this._calculateChartBox(),e=d.w+"px",k=d.h+"px",l={};(a.config&&a.config.types||[]).forEach(function(a){if(a=
a&&a.type)"column"===a?l.column=this.nls.columnChart:"bar"===a?l.bar=this.nls.barChart:"line"===a?l.line=this.nls.lineChart:"pie"===a&&(l.pie=this.nls.pieChart)}.bind(this));var y=h.map(a.config.types,f.hitch(this,function(a){var b=g.create("div",{"class":"chart-div",style:{width:e,height:k}},this.chartRealContainer),c=a.type,d=g.toDom("\x3cli class\x3d'paging-li'\x3e\x3ca tabindex\x3d'0' role\x3d'link' aria-label\x3d'"+l[c]+"'class\x3d'paging-a'\x3e\x3c/a\x3e\x3c/li\x3e");g.place(d,this.pagingUl);
a=a.display;a.backgroundColor||(a.backgroundColor="transparent");a.hasOwnProperty("showLegend")||(a.showLegend=!1);a.legendTextColor||(a.legendTextColor=this.fontColor);"pie"===c?(a.hasOwnProperty("showDataLabel")||(a.showDataLabel=!0),a.dataLabelColor||(a.dataLabelColor=this.fontColor)):(a.hasOwnProperty("showHorizontalAxis")||(a.showHorizontalAxis=!0),a.horizontalAxisTextColor||(a.horizontalAxisTextColor=this.fontColor),a.hasOwnProperty("showVerticalAxis")||(a.showVerticalAxis=!0),a.verticalAxisTextColor||
(a.verticalAxisTextColor=this.fontColor));return b})),b=null;"feature"===this.config.mode?b=this._createFeatureModeCharts(a,y):"category"===this.config.mode?b=this._createCategoryModeCharts(a,y):"count"===this.config.mode?b=this._createCountModeCharts(a,y):"field"===this.config.mode&&(b=this._createFieldModeCharts(a,y));this.charts=b.charts;this.paramsDijits=b.paramsDijits;this.tooltipDialogs=h.map(this.paramsDijits,f.hitch(this,function(a){var b=g.create("div");a.placeAt(b);return new F({content:b})}));
a=0;0<=this.initialChartIndex&&this.charts.length>=this.initialChartIndex+1&&(a=this.initialChartIndex);this._showChart(a)}catch(N){console.error(N)}},_calculateChartBox:function(){var a=!!this.config.description,b=g.getContentBox(this.domNode).h,c=b;0<this.resultsHeader.clientHeight&&(c=g.getMarginBox(this.resultsHeader),c=b-c.h);var d=0;a&&(d=parseInt(.15*b,10),c-=d);a=60;c<a&&(a=c);g.setStyle(this.leftArrow,"height",a+"px");g.setStyle(this.rightArrow,"height",a+"px");g.setStyle(this.chartRealContainer,
"height",c+"px");g.setStyle(this.descriptionContainer,"max-height",d+"px");g.setStyle(this.faildRenderInfo,"height",c+"px");return g.getContentBox(this.chartRealContainer)},_calculateDecimalPlaceForFloatField:function(){this.floatNumberFieldDecimalPlace={};var a=[];this.config.labelField&&a.push(this.config.labelField);this.config.categoryField&&a.push(this.config.categoryField);this.config.valueFields&&(a=a.concat(this.config.valueFields));var b=h.filter(a,f.hitch(this,function(a){return this._isFloatNumberField(a)})),
c={};h.forEach(b,f.hitch(this,function(a){c[a]=[]}));(a=this.features)&&0<a.length&&h.forEach(a,f.hitch(this,function(a){var d=a.attributes;d&&h.forEach(b,f.hitch(this,function(a){var b=d[a];"number"===typeof b&&c[a].push(b)}))}));h.forEach(b,f.hitch(this,function(a){this.floatNumberFieldDecimalPlace[a]=0;var b=c[a];if(0<b.length)try{var d=this._getBestDecimalPlace(b);this.floatNumberFieldDecimalPlace[a]=d}catch(l){this.floatNumberFieldDecimalPlace[a]=0,console.error(l)}this.popupFieldInfosObj&&(b=
this.popupFieldInfosObj[a])&&b.format&&0<=b.format.places&&(this.floatNumberFieldDecimalPlace[a]=b.format.places)}))},_onDocumentBodyClick:function(a){if(0<=this.currentChartIndex&&this.tooltipDialogs){var b=this.tooltipDialogs[this.currentChartIndex];if(b){var c=!!b.isOpendNow;this._hideAllTooltipDialogs();var d=a.target||a.srcElement;d===this.leftArrow||d===this.rightArrow||g.hasClass(d,"paging-a")||g.hasClass(d,"paging-li")||(d===this.settingsIcon?c?this._hideTooltipDialog(b):this._showTooltipDialog(b):
(a=d===b.domNode,d=g.isDescendant(d,b.domNode),a||d?c?this._showTooltipDialog(b):this._hideTooltipDialog(b):this._hideTooltipDialog(b)))}else this._hideAllTooltipDialogs()}else this._hideAllTooltipDialogs()},_onSettingsIconClicked:function(){var a=this.tooltipDialogs[this.currentChartIndex];a&&(a.isOpendNow?(this._hideTooltipDialog(a),v.focus(this.settingsIcon)):(this._showTooltipDialog(a),(a=this.paramsDijits[this.currentChartIndex])&&v.focus(a.domNode)))},clear:function(){this.featureLayer=this.features=
this.config=null;this.chartTitle.innerHTML="";this.chartTitle.title="";this.currentChartIndex=-1;this.popupFieldInfosObj=this.floatNumberFieldDecimalPlace=null;u("li",this.pagingUl).removeClass("selected");this.charts||(this.charts=[]);this.paramsDijits||(this.paramsDijits=[]);this.tooltipDialogs||(this.tooltipDialogs=[]);for(var a=0;a<this.charts.length;a++)this.charts[a]&&this.charts[a].destroy(),this.charts[a]=null,this.paramsDijits[a]&&this.paramsDijits[a].destroy(),this.paramsDijits[a]=null,
this.tooltipDialogs[a]&&this.tooltipDialogs[a].destroy(),this.tooltipDialogs[a]=null;this.charts=[];this.paramsDijits=[];this.tooltipDialogs=[];g.empty(this.pagingUl);g.empty(this.chartRealContainer);g.empty(this.descriptionContainer);g.addClass(this.domNode,this.noMoreThanOneChartClassName)},_showFialdRenderInfo:function(){g.addClass(this.chartSection,"render-faild")},_hideFialdRenderInfo:function(){g.removeClass(this.chartSection,"render-faild")},_showChart:function(a){this.currentChartIndex=-1;
var b=u(".chart-div",this.chartRealContainer);b.style({display:"none"});var c=u("li",this.pagingUl);c.removeClass("selected");if(!(0>a)){if(b=b[a])this.currentChartIndex=a,g.setStyle(b,"display","block");(c=c[a])&&g.addClass(c,"selected");this.charts&&0<this.charts.length&&(c=this.charts[a])&&this._handlePieChartDisplay(c);if(!this.isBigPreview&&(c=null,this.charts&&0<this.charts.length&&(c=this.charts[a]))){a=this._calculateChartBox();var d=g.getContentBox(b);if(a.w!==d.w||a.h!==d.h)this.loading.show(),
d=a.w+"px",a=a.h+"px",g.setStyle(b,"width",d),g.setStyle(b,"height",a),c.resize(d,a),this.loading.hide()}}},_handlePieChartDisplay:function(a){var b=!1;a&&a.config&&"pie"===a.config.type&&(a=a.config.labels)&&150<a.length&&(b=!0);b?this._showFialdRenderInfo():this._hideFialdRenderInfo()},_hideAllTooltipDialogs:function(){this.tooltipDialogs&&0<this.tooltipDialogs.length&&h.forEach(this.tooltipDialogs,f.hitch(this,function(a){this._hideTooltipDialog(a)}))},_hideTooltipDialog:function(a){a&&(z.close(a),
a.isOpendNow=!1)},_showTooltipDialog:function(a){a&&(z.open({popup:a,around:this.settingsIcon}),a.isOpendNow=!0)},_onPagingUlKeydown:function(a){a.keyCode!==p.TAB||a.shiftKey||(a.preventDefault(),v.focus(this.settingsIcon));if(a.keyCode===p.RIGHT_ARROW||a.keyCode===p.DOWN_ARROW)this._onRightArrowClicked(a),this._focusPagingLink();if(a.keyCode===p.LEFT_ARROW||a.keyCode===p.UP_ARROW)this._onLeftArrowClicked(a),this._focusPagingLink()},_focusPagingLink:function(){var a=u(".paging-li:nth-child("+(this.currentChartIndex+
1)+")",this.pagingUl)[0];(a=a&&a.firstChild)&&v.focus(a)},_onPagingUlClicked:function(a){a.stopPropagation();this._hideAllTooltipDialogs();a=a.target||a.srcElement;if("a"===a.tagName.toLowerCase()){var b=u("a",this.pagingUl);a=h.indexOf(b,a);0<=a&&this._showChart(a)}},_onLeftArrowClicked:function(a){a.stopPropagation();this._hideAllTooltipDialogs();a=(this.currentChartIndex-1+this.charts.length)%this.charts.length;0<=a&&this._showChart(a)},_onLeftArrowKeydown:function(a){a.keyCode===p.ENTER&&this._onLeftArrowClicked(a)},
_onRightArrowClicked:function(a){a.stopPropagation();this._hideAllTooltipDialogs();a=(this.currentChartIndex+1+this.charts.length)%this.charts.length;0<=a&&this._showChart(a)},_onRightArrowKeydown:function(a){a.keyCode===p.ENTER&&this._onRightArrowClicked(a)},_getHighLightMarkerSymbol:function(){var a=w.fromJson({color:[255,255,255,0],size:18,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSSquare",outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"}});a.setSize(30);
a.outline.setColor(new t(this.config.highLightColor));return a},_getHighLightLineSymbol:function(a){var b=w.fromJson({color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"});b.setColor(new t(a||this.config.highLightColor));return b},_getDefaultHighLightFillSymbol:function(){var a=w.fromJson({color:[0,255,255,128],outline:{color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"});a.outline.setColor(new t(this.config.highLightColor));return a},
_getVisualVariableByType:function(a,b){return b&&(b=h.filter(b,function(b){return b.type===a&&!b.target}),b.length)?b[0]:null},_getSymbolByRenderer:function(a,b){var c=this._getDefaultHighLightFillSymbol(),d=this._getVisualVariableByType("colorInfo",a.visualVariables);if(d){if(a=a.getColor(b,{colorInfo:d}))a=f.clone(a),c.setColor(a)}else c=a.getSymbol(b);return c},_getHighLightFillSymbol:function(a,b,c){var d=null,e=b.symbol,d=a.renderer;!e&&d&&(e=this._getSymbolByRenderer(d,b));e&&"function"===typeof e.setOutline?
(d=w.fromJson(e.toJson()),b=1.5,e.outline&&0<e.outline.width&&(b=e.outline.width+1),c=this._getHighLightLineSymbol(c?"#ff0000":this.config.highLightColor),c.setWidth(b),d.setOutline(c)):d=this._getDefaultHighLightFillSymbol();return d},_zoomToGraphics:function(a){if(this.map&&this.featureLayer&&this.featureLayer.visible){var b;a&&0<a.length&&(b=h.filter(a,function(a){a=a.geometry;return"point"!==a.type?!0:m.isVaildPointGeometry(a)}.bind(this)));if(b&&0<b.length){a=m.toFeatureSet(b);try{m.zoomToFeatureSet(this.map,
a)}catch(c){console.error(c)}}}},_removeTempGraphics:function(){if(this.featureLayer&&this.tempGraphics&&0<this.tempGraphics.length)for(;0<this.tempGraphics.length;)this.featureLayer.remove(this.tempGraphics[0]),this.tempGraphics.splice(0,1);this.tempGraphics=null},_mouseOverChartItem:function(a){this._removeTempGraphics();h.forEach(a,f.hitch(this,function(a){a._originalSymbol=a.symbol}));if(this.featureLayer&&this.featureLayer.getMap()&&this.featureLayer.visible){var b=m.getTypeByGeometryType(this.featureLayer.geometryType),
c=null;if("point"===b)c=this._getHighLightMarkerSymbol(),this.tempGraphics=[],h.forEach(a,f.hitch(this,function(a){a=new K(a.geometry,c);this.tempGraphics.push(a);this.featureLayer.add(a)}));else if("polyline"===b)c=this._getHighLightLineSymbol(),h.forEach(a,f.hitch(this,function(a){a.setSymbol(c)}));else if("polygon"===b){var d=this.featureLayer.getSelectedFeatures()||[];h.forEach(a,f.hitch(this,function(a){var b=0<=d.indexOf(a),b=this._getHighLightFillSymbol(this.featureLayer,a,b);a.setSymbol(b)}));
this.features.length!==a.length&&"polygon"===b&&(h.forEach(a,f.hitch(this,function(a){this.featureLayer.remove(a)})),h.forEach(a,f.hitch(this,function(a){this.featureLayer.add(a)})))}}},_mouseOutChartItem:function(a){this._removeTempGraphics();h.forEach(a,f.hitch(this,function(a){a.setSymbol(a._originalSymbol||null)}))},_isNumber:function(a){return"[object number]"===Object.prototype.toString.call(a).toLowerCase()},_tryLocaleNumber:function(a,b){var c=a;if(J.isDefined(a)&&isFinite(a))try{var d;if(b&&
this._isNumberField(b)){var e=this.popupFieldInfosObj[b];d=e&&f.exists("format.places",e)?m.localizeNumberByFieldInfo(a,e):m.localizeNumber(a)}else d=a;"string"===typeof d&&(c=d)}catch(k){console.error(k)}return c+""},_getBestDisplayValue:function(a,b){var c=this._tryLocaleNumber(b,a);if(this.featureLayer.typeIdField===a){var d=this.featureLayer.types;if(d&&0<d.length&&(d=h.filter(d,f.hitch(this,function(a){return a.id===b})),0<d.length))return c=d[0].name}(a=this._getFieldInfo(a))&&a.domain&&(a=
a.domain.codedValues)&&0<a.length&&h.some(a,function(a){return a.code===b?(c=a.name,!0):!1});return c},_getFieldAliasArray:function(a){return h.map(a,f.hitch(this,function(a){return this._getFieldAlias(a)}))},_getFieldAlias:function(a){var b=a;(a=this._getFieldInfo(a))&&(b=a.alias||b);return b},_getFieldInfo:function(a){if(this.featureLayer)for(var b=this.featureLayer.fields,c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},_isNumberField:function(a){var b=["esriFieldTypeSmallInteger",
"esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return h.some(this.featureLayer.fields,f.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},_isFloatNumberField:function(a){var b=["esriFieldTypeSingle","esriFieldTypeDouble"];return h.some(this.featureLayer.fields,f.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},_isDateField:function(a){return(a=this._getFieldInfo(a))?"esriFieldTypeDate"===a.type:!1},_getBestDecimalPlace:function(a){var b=0,c=
{};h.forEach(a,function(a){a=a.toString().split(".");var b=null;1===a.length?b=0:2===a.length&&(b=a[1].length);null!==b&&(c[b]=void 0===c[b]?1:c[b]+1)});a=null;for(var d in c){d=parseInt(d,10);var e=c[d];a?e>a.value&&(a={key:d,value:e}):a={key:d,value:e}}a&&(b=parseInt(a.key,10));return b},_getFloatNumberFieldDecimalPlace:function(a){var b=0;this.floatNumberFieldDecimalPlace&&(a=this.floatNumberFieldDecimalPlace[a],"number"===typeof a&&(b=a));return b},_getBestValueForFloatNumberField:function(a,
b){b=this._getFloatNumberFieldDecimalPlace(b);a=a.toFixed(b);return parseFloat(a)},_getColors:function(a,b){var c=[];a=f.clone(a);if(2===a.colors.length)c=this._createGradientColors(a.colors[0],a.colors[a.colors.length-1],b);else{for(var d=Math.ceil(b/a.colors.length),e=0;e<d;e++)c=c.concat(a.colors);c=c.slice(0,b)}return c},_createGradientColors:function(a,b,c){var d=[];a=new t(a);var e=new t(b);b=(e.r-a.r)/c;for(var k=(e.g-a.g)/c,e=(e.b-a.b)/c,f=new t,h=0,g=0,q=0,n=0;n<c;n++)h=parseInt(a.r+b*n,
10),g=parseInt(a.g+k*n,10),q=parseInt(a.b+e*n,10),f.setColor([h,g,q]),d.push(f.toHex());return d},_createParamsDijit:function(a,b,c){a=new M({isInWidget:this.map?!0:!1,type:a,config:b});this.own(r(a.domNode,"keydown",f.hitch(this,function(a){a.keyCode===p.ESCAPE&&this._onSettingsIconClicked()})));a._updateLegendDisplayByMode(c);return a},_createJimuChart:function(a,b,c,d,e){var k=e.type,l=this._createParamsDijit(k,e.display,b),h=l.getConfig();h&&f.mixin(e.display,h);var g=this._getBasicChartOptionsByStatisticsInfo(b,
c,d,k);this._udpateJimuChartDisplayOptions(g,e);var q=new L({chartDom:a,config:{type:k||"column",labels:[],series:[{data:[]}]}});q.placeAt(a);q.resize();q.updateConfig(g);this._bindChartEvent(q,b,d);this.showSettingIcon&&this.own(r(l,"change",f.hitch(this,function(){l.showShelter();if(q){var a=l.getConfig();f.mixin(e.display,a);this._udpateJimuChartDisplayOptions(g,e);q.updateConfig(g)}l.hideShelter()})));return[q,l]},_udpateJimuChartDisplayOptions:function(a,b){var c=b.type;b=b.display;this._settingAxisDisplay(a,
b,c);a.type=c;a.dataZoom=["inside","slider"];a.confine=!0;a.backgroundColor=b.backgroundColor;a.color=b.colors;var d={show:b.showLegend,textStyle:{}};b.legendTextColor&&(d.textStyle.color=b.legendTextColor);b.legendTextSize&&(d.textStyle.fontSize=b.legendTextSize);a.legend=d;d={show:b.showDataLabel,textStyle:{}};b.dataLabelColor&&(d.textStyle.color=b.dataLabelColor);b.dataLabelSize&&(d.textStyle.fontSize=b.dataLabelSize);a.dataLabel=d;"pie"===c&&(a.innerRadius=b.innerRadius);return a},_settingAxisDisplay:function(a,
b,c){if(!(0>["column","bar","line"].indexOf(c))){var d={show:b.showHorizontalAxis,textStyle:{}};b.horizontalAxisTextColor&&(d.textStyle.color=b.horizontalAxisTextColor);b.horizontalAxisTextSize&&(d.textStyle.fontSize=b.horizontalAxisTextSize);a.xAxis=d;d={show:b.showVerticalAxis,textStyle:{}};b.verticalAxisTextColor&&(d.textStyle.color=b.verticalAxisTextColor);b.verticalAxisTextSize&&(d.textStyle.fontSize=b.verticalAxisTextSize);a.yAxis=d;b.stack||(b.stack=!1);if("column"===c||"bar"===c||"line"===
c&&b.area)a.stack=b.stack;"line"!==c||b.area||(b.area=!1);"line"===c&&(a.area=b.area);a.axisPointer=!0;a.scale=!1}},_getBasicChartOptionsByStatisticsInfo:function(a,b,c,d){return"feature"===a||"category"===a?this._getCategoryModeChartOptionsByStatisticsInfo(b,c,d):"count"===a?this._getCountModeChartOptionsByStatisticsInfo(c,d):"field"===a?this._getFieldModeChartOptionByStatisticsInfo(c,d):null},_bindChartEvent:function(a,b,c){if(this.map&&0!==c.length){var d=f.hitch(this,function(a){if("series"===
a.componentType){var d=null;if("field"===b)d=this.features;else{var e=c[a.dataIndex];e&&(d=e.dataFeatures)}d&&("mouseover"===a.type?this._mouseOverChartItem(d):"mouseout"===a.type?this._mouseOutChartItem(d):"click"===a.type&&this.zoomToFeaturesWhenClick&&this._zoomToGraphics(d))}}),e=[{name:"mouseover",callback:d},{name:"mouseout",callback:d}];this.zoomToFeaturesWhenClick&&e.push({name:"click",callback:d});h.forEach(e,f.hitch(this,function(b){a.chart.on(b.name,b.callback)}))}},_createFeatureModeCharts:function(a,
b){var c=[],d=[],e=a.config,k={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,labelField:e.labelField,valueFields:e.valueFields,sortOrder:e.sortOrder,maxLabels:e.maxLabels,useLayerSymbology:e.useLayerSymbology};this.featureLayerForChartSymbologyChart&&(k.featureLayerForChartSymbologyChart=this.featureLayerForChartSymbologyChart);var g=x.getFeatureModeStatisticsInfo(k);h.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],
"feature",k,g,a);c.push(f[0]);d.push(f[1])}catch(n){console.error(n)}}));return{charts:c,paramsDijits:d}},_createCategoryModeCharts:function(a,b){var c=[],d=[],e=a.config,k={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,categoryField:e.categoryField,valueFields:e.valueFields,operation:a.config.operation,sortOrder:e.sortOrder,dateConfig:e.dateConfig,maxLabels:e.maxLabels,nullValue:e.nullValue,useLayerSymbology:e.useLayerSymbology,splitField:e.splitField};
this.featureLayerForChartSymbologyChart&&(k.featureLayerForChartSymbologyChart=this.featureLayerForChartSymbologyChart);var g=x.getCategoryModeStatisticsInfo(k);h.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"category",k,g,a);c.push(f[0]);d.push(f[1])}catch(n){console.error(n)}}));return{charts:c,paramsDijits:d}},_getSplitedSeriesForCategoryOrCountMode:function(a,b){var c={type:b,labels:[],series:[]},d=[];a.forEach(function(a){if(a=a.splitedValueFields)a=a.map(function(a){return a.field}),
d=d.concat(a)});var e=m.uniqueArray(d);c.series=h.map(e,f.hitch(this,function(c){for(var d=[],e=0;e<a.length;e++)d[e]=null;return{name:c,type:b,data:d}}));h.forEach(a,f.hitch(this,function(a,b){var d="";a.category?d=a.category:a.fieldValue&&(d=a.fieldValue);c.labels.push(d);a.splitedValueFields.forEach(function(d){c.series.forEach(function(c){if(c.name===d.field)if("undefined"!==typeof a.color){var e=this._getSerieData(a,d.value);c.data[b]=e}else c.data[b]=d.value}.bind(this))}.bind(this))}));return c},
_getCategoryModeChartOptionsByStatisticsInfo:function(a,b,c){a=this._getFieldAliasArray(a.valueFields);var d=null,d={type:c,labels:[],series:[]};d.series=h.map(a,f.hitch(this,function(a){return{name:a,type:c,data:[]}}));h.forEach(b,f.hitch(this,function(a){d.labels.push(a.category);for(var b=0;b<a.valueFields.length;b++){var c=a.valueFields[b];"undefined"!==typeof a.color&&(c=this._getSerieData(a,c));d.series[b].data.push(c)}}));return d},_getSeriesOfRadar:function(a){a=a.map(function(a){return{name:a.category,
value:a.valueFields}});return[{type:"radar",data:a}]},_isAllFalseColor:function(a){return a.every(function(a){return!a.color})},_getSerieData:function(a,b){a.color||(a.color="transparent");return{value:b,itemStyle:{normal:{color:a.color},emphasis:{color:a.color}}}},_createCountModeCharts:function(a,b){var c=[],d=[],e=a.config,g={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,categoryField:e.categoryField,sortOrder:e.sortOrder,dateConfig:e.dateConfig,
maxLabels:e.maxLabels,useLayerSymbology:e.useLayerSymbology,splitField:e.splitField};this.featureLayerForChartSymbologyChart&&(g.featureLayerForChartSymbologyChart=this.featureLayerForChartSymbologyChart);var l=x.getCountModeStatisticsInfo(g);h.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"count",g,l,a);c.push(f[0]);d.push(f[1])}catch(n){console.error(n)}}));return{charts:c,paramsDijits:d}},_getCountModeChartOptionsByStatisticsInfo:function(a,b){var c={type:b,labels:[],
series:[{name:"",type:b,data:[]}]};h.forEach(a,f.hitch(this,function(a){var b=a.count;c.labels.push(a.fieldValue);"undefined"!==typeof a.color?(a=this._getSerieData(a,b),c.series[0].data.push(a)):c.series[0].data.push(b)}));return c},_createFieldModeCharts:function(a,b){var c=[],d=[],e=a.config,g={layerDefinition:this.featureLayer,popupFieldInfosObj:this.popupFieldInfosObj,features:a.features,valueFields:e.valueFields,operation:e.operation,sortOrder:e.sortOrder,maxLabels:e.maxLabels,nullValue:e.nullValue},
l=x.getFieldModeStatisticsInfo(g);h.forEach(e.types,f.hitch(this,function(a,e){try{var f=this._createJimuChart(b[e],"field",g,l,a);c.push(f[0]);d.push(f[1])}catch(n){console.error(n)}}));return{charts:c,paramsDijits:d}},_getFieldModeChartOptionByStatisticsInfo:function(a,b){var c={type:b,labels:[],series:[{name:"",type:b,data:[]}]};h.forEach(a,f.hitch(this,function(a){var b=this._getFieldAlias(a.label);c.labels.push(b);c.series[0].data.push(a.value)}));return c}})});