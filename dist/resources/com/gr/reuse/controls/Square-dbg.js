sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";
    return Control.extend("com.gr.reuse.controls.Square", {
        metadata: {
            properties: {
                "text": "string",
                "size": { type: "sap.ui.core.CSSSize", defaultValue: "200px" }
            }
        },

        renderer : function (oRm, oControl) {
            // instead of "this" in the render function
            oRm.openStart("div", oControl);  // creates the root element incl. the Control ID and enables event handling - important!
            oRm.style("width", oControl.getSize());  // write the Control property size; the Control has validated it to be a CSS size
            oRm.style("height", oControl.getSize());
            oRm.class("mySquare");           // add a CSS class for styles common to all Control instances
            oRm.openEnd();                   // this call writes the above class plus enables support 
            // for Square.addStyleClass(...)
            oRm.text(oControl.getText());    // write another Control property, with protection against cross-site-scripting
            oRm.close("div");
        }

    });
});