sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatterfile",
    "sap/m/MessageBox"
], function (UIComponent, History, Controller, JSONModel, formatterfile, MessageBox) {
    "use strict";

    return Controller.extend("product.controller.View2", {
        format: formatterfile,
        onInit: function () {
            var oProdJson = new JSONModel("../model/products.json");
            this.getView().setModel(oProdJson, "Prod");
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1", {}, true);
            }
        },
        onPressCombo: function (oEvent) {
            var item = this.getView().byId("idCombo").getSelectedKey();
            MessageBox.show(item, { icon: MessageBox.Icon.INFORMATION, title: 'Info' });
        },
        // onOpnDialog: async function (oEvent) {
        // var dialog = await this.loadFragment({   <!-- working stmnt -->
        //     name: "product.view.View2Dialog"
        // });
        onOpnDialog() {                 // this is another way of writing function
            if (this.dialog === undefined) {    // first time dialog is created then it is undefined, then if
                // we press f4 help again, it is loaded already hence it will throw error
                // as duplicate id
                this.dialog = sap.ui.xmlfragment(this.getView().getId(), "product.view.View2Dialog", this);
                this.getView().addDependent(this.dialog);
            }
            this.dialog.open();
        },
        onCloseDialog: function (oEvent) {
            this.dialog.close();
        },
        onPressRow: function (oEvent) {
            console.log('pressed');
            var itemid = oEvent.getSource().getBindingContext('Prod').getProperty('ProductId');
            this.byId('idCombo').setValue(itemid);
            this.dialog.close();
        }
        
    });
});