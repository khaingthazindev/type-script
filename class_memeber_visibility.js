var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log('public greet');
    };
    Greeter.prototype.greet2 = function () {
        console.log('protected greet2');
    };
    Greeter.prototype.greet3 = function () {
        console.log('private greet3');
    };
    Greeter.prototype.greet3Solver = function () {
        this.greet3();
    };
    return Greeter;
}());
var SubGreeter = /** @class */ (function (_super) {
    __extends(SubGreeter, _super);
    function SubGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubGreeter.prototype.greet4 = function () {
        this.greet2();
    };
    return SubGreeter;
}(Greeter));
var greeter = new Greeter();
greeter.greet();
// greeter.greet2();
greeter.greet3Solver();
var subGreeter = new SubGreeter();
subGreeter.greet4();
var PrivateDemo = /** @class */ (function () {
    function PrivateDemo() {
        this.data = 100;
    }
    return PrivateDemo;
}());
var obj = new PrivateDemo();
// console.log(obj.data); // not accessible
var hackedObj = obj;
console.log(hackedObj.data);
