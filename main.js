"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf());
    };
    console.log(Validations.validateText('derwin'));
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map