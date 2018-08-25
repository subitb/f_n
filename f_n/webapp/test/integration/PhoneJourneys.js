sap.ui.define([
	"sap/ui/test/Opa5",
	"ss/f_n/test/integration/arrangements/Arrangement",
	"ss/f_n/test/integration/NavigationJourneyPhone",
	"ss/f_n/test/integration/NotFoundJourneyPhone",
	"ss/f_n/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "ss.f_n.view.",
		autoWait: true
	});
});
