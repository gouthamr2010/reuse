/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.gr.reuse.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * STO Reuse Library
		 *
		 * @namespace
		 * @name com.gr.reuse
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "com.gr.reuse",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"com.gr.reuse.controls.ProductRating",
				"com.gr.reuse.controls.Square"
			],
			elements: []
		});

		/* eslint-disable */
		return com.gr.reuse;
		/* eslint-enable */

	}, /* bExport= */ false);