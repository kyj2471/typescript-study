"use strict";
var _a, _b, _c, _d, _e, _f;
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
//number
var numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(+"1");
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed()); //0
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed()); //1
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed()); //undefined
//string
var stringQueue = new Queue();
stringQueue.push("hello");
stringQueue.push("Tony");
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase()); //HELLO
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase()); //TONY
console.log((_f = stringQueue.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase()); //undefined
//custom
var customQueue = new Queue();
customQueue.push({ name: "Tony", age: 29 });
customQueue.push({ name: "Chloe", age: 20 });
console.log(customQueue.pop()); //{ name: 'Tony', age: 29 }
console.log(customQueue.pop()); //{ name: 'Chloe', age: 20 }
console.log(customQueue.pop()); //undefined
