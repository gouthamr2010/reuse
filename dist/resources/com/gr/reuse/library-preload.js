//@ui5-bundle com/gr/reuse/library-preload.js
sap.ui.predefine("com/gr/reuse/controls/ProductRating",["sap/ui/core/Control","sap/m/RatingIndicator","sap/m/Label","sap/m/Button"],function(e,t,i,a){"use strict";return e.extend("com.gr.reuse.controls.ProductRating",{metadata:{properties:{value:{type:"float",defaultValue:0}},aggregations:{_rating:{type:"sap.m.RatingIndicator",multiple:false,visibility:"hidden"},_label:{type:"sap.m.Label",multiple:false,visibility:"hidden"},_button:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},events:{change:{parameters:{value:{type:"int"}}}}},init:function(){this.setAggregation("_rating",new t({value:this.getValue(),iconSize:"2rem",visualMode:"Half",liveChange:this._onRate.bind(this)}));this.setAggregation("_label",new i({text:sap.ui.getCore().getLibraryResourceBundle("com.gr.reuse").getText("productRatingLabelInitial")}).addStyleClass("sapUiTinyMargin"));this.setAggregation("_button",new a({text:sap.ui.getCore().getLibraryResourceBundle("com.gr.reuse").getText("productRatingButton"),press:this._onSubmit.bind(this)}))},setValue:function(e){this.setProperty("value",e,true);this.getAggregation("_rating").setValue(e)},_onRate:function(e){var t=this.getModel("i18n").getResourceBundle();var i=e.getParameter("value");this.setValue(i);this.getAggregation("_label").setText(t.getText("productRatingLabelIndicator",[i,e.getSource().getMaxValue()]));this.getAggregation("_label").setDesign("Bold")},_onSubmit:function(e){var t=this.getModel("i18n").getResourceBundle();this.getAggregation("_rating").setEnabled(false);this.getAggregation("_label").setText(t.getText("productRatingLabelFinal"));this.getAggregation("_button").setEnabled(false);this.fireEvent("change",{value:this.getValue()})},renderer:function(e,t){e.write("<div");e.writeControlData(t);e.addClass("myAppDemoWTProductRating");e.writeClasses();e.write(">");e.renderControl(t.getAggregation("_rating"));e.renderControl(t.getAggregation("_label"));e.renderControl(t.getAggregation("_button"));e.write("</div>")}})});
sap.ui.predefine("com/gr/reuse/controls/Square",["sap/ui/core/Control"],function(e){"use strict";return e.extend("com.gr.reuse.controls.Square",{metadata:{properties:{text:"string",size:{type:"sap.ui.core.CSSSize",defaultValue:"200px"}}},renderer:function(e,t){e.openStart("div",t);e.style("width",t.getSize());e.style("height",t.getSize());e.class("mySquare");e.openEnd();e.text(t.getText());e.close("div")}})});
sap.ui.predefine("com/gr/reuse/library",["sap/ui/core/library"],function(){"use strict";sap.ui.getCore().initLibrary({name:"com.gr.reuse",version:"1.0.0",dependencies:["sap.ui.core"],types:[],interfaces:[],controls:["com.gr.reuse.controls.ProductRating","com.gr.reuse.controls.Square"],elements:[]});return com.gr.reuse},false);
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/gr/reuse/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.gr.reuse","type":"library","applicationVersion":{"version":"1.0.0"},"title":"Library","description":"Library","ach":"","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["sap_belize"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.52.0","libs":{"sap.ui.core":{"minUI5Version":"1.52.0"}}},"library":{"i18n":"messagebundle.properties","css":true,"content":{"controls":["com.gr.reuse.ProductRating"],"elements":[],"types":[],"interfaces":[]}}},"sap.platform.hcp":{"uri":""},"sap.fiori":{"registrationIds":[],"archeType":"reusecomponent"}}'
}});
