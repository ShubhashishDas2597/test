sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent"
], (Controller, JSONModel, MessageBox, UIComponent) => {
    "use strict";

    return Controller.extend("product.controller.View1", {
        onInit() {
            // this.getView().byId('idButton').setEnabled(false);
            var oViewModel = new JSONModel({
                inputValue: ""
            });
            this.getView().setModel(oViewModel, "view");
        },
        onpress() {
            var name = this.getView().byId('idName').getValue();
            if (name != undefined) {
                this.getView().byId('idHead').setText(`Hello ${name}`);
                this.getView().byId('idButton').setIcon('sap-icon://arrow-left');
            }

        },
        onPressButton() {
            var employeeId = this.getView().byId('idE').getValue();
            if (employeeId === '') {
                // MessageBox.show("Empid Needed");
                MessageBox.error("Empid Needed", {
                    title: "Error Screen"
                });
                this.getView().byId('idE').setValueState('Error');
                this.this.getView().byId('idE').setValueStateText("Here");
            }
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView2");
        }
    });
});