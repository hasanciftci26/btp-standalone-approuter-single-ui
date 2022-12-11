sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ndbs.training.html5ui1.controller.Homepage", {
            onInit: function () {

            },
            onAfterRendering: function () {
                this.getView().getModel().read("/Customers", {
                    filters: null,
                    sorters: null,
                    async: true,
                    success: function (oData) {
                        var test = "x";
                    },
                    error: function (oError) {

                    }
                });
            }
        });
    });
