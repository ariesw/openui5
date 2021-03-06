sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.IconTabBarBackgroundDesign.Component", {

		metadata : {
			rootView : "sap.m.sample.IconTabBarBackgroundDesign.IconTabBarBackgroundDesign",
			dependencies : {
				libs : [
					"sap.m",
					"sap.ui.layout"
				],
				components : [
					"sap.m.sample.Table"
				]
			},
			includes : [
				"style.css"
			],
			config : {
				sample : {
					files : [
						"IconTabBarBackgroundDesign.view.xml",
						"IconTabBarBackgroundDesign.controller.js"
					]
				}
			}
		}
	});

	return Component;

});
