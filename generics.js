"use strict";
exports.__esModule = true;
// Generic
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add("Henson");
nameQueue.add("Andrei");
var numberQueue = new Queue();
numberQueue.add(10);
