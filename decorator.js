"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Step in Configuring Decorators.
// 1. Go to the terminal and type npx tsx --init
// 2. Go to the created file and delete all the codes in there and
//    copy paste the code in this repository with a file name tsconfig.json.
var MenuItem = function (itemID) {
    return function (target) {
        target.prototype.id = itemID;
    };
};
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza = __decorate([
        MenuItem("abc")
    ], Pizza);
    return Pizza;
}());
var Hamburger = /** @class */ (function () {
    function Hamburger() {
    }
    Hamburger = __decorate([
        MenuItem("xyz")
    ], Hamburger);
    return Hamburger;
}());
console.log(new Pizza().id);
console.log(new Hamburger().id);
