sap.ui.define([
	"ss/f_n/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ss.f_n.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
