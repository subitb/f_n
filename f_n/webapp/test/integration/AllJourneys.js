// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

sap.ui.define([
	"sap/ui/test/Opa5",
	"ss/f_n/test/integration/arrangements/Arrangement","ss/f_n/test/integration/MasterJourney",
	"ss/f_n/test/integration/NavigationJourney",
	"ss/f_n/test/integration/NotFoundJourney",
	"ss/f_n/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "ss.f_n.view.",
		autoWait: true
	});
});
