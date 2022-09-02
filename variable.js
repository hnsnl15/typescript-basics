"use strict";
exports.__esModule = true;
// Variables
var myName = "";
myName = "klkl";
// Union Types
var anyType = null;
anyType = 23;
anyType = "anytype";
// Sample of Union Type function
var addShipping = function (price, shipping) {
    return price + shipping;
};
addShipping(10, 5);
// Arrays
var items = ["test", 1, null, undefined]; // any type
// Objects
var account = {
    name: "Luis",
    balance: 10
};
// Combining Array and Object
var accounts; // this tell ts that we will store object of an account
// Classes
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
