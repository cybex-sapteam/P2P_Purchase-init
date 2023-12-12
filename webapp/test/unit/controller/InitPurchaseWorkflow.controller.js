/*global QUnit*/

sap.ui.define([
	"gbwfcerpurchaseinit/cerpurchaseinit/controller/InitPurchaseWorkflow.controller"
], function (Controller) {
	"use strict";

	QUnit.module("InitPurchaseWorkflow Controller");

	QUnit.test("I should test the InitPurchaseWorkflow controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
