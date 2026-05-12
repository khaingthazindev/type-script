var UniqueId = /** @class */ (function () {
    function UniqueId() {
        console.log('this is constructor');
        this.uniqueId = ++UniqueId.globalId;
    }
    UniqueId.prototype.print = function () {
        console.log(this.uniqueId);
    };
    UniqueId.staticMethod = function () {
        console.log('static method');
    };
    UniqueId.globalId = 0;
    (function () {
        console.log('static block 1');
    })();
    (function () {
        console.log('static block 2');
    })();
    return UniqueId;
}());
var obj = new UniqueId();
obj.print();
UniqueId.staticMethod();
var obj1 = new UniqueId();
obj1.print();
var obj2 = new UniqueId();
obj2.print();
