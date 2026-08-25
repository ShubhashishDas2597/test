sap.ui.define([], function () {
    "use strict";
    return {
        changeName: function (sName) {
            if (sName.includes("Notebook")) {
                return ("Basic " + sName);
            } else {
                return sName;
            }
        },
        changeState: function (sQty) {
            if (sQty <= 10) {
                return 'Warning';
            } else if (sQty > 10) {
                return 'Success';
            };
        },
        changeText: function (sQty) {
            if (sQty <= 10) {
                return 'Ending Soon';
            } else if (sQty > 10) {
                return 'In Stock';
            };
        }
    };
});