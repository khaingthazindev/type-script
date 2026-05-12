var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        throw new Error('Method not implemented.');
    };
    return Bird;
}());
var Aeroplane = /** @class */ (function () {
    function Aeroplane() {
    }
    Aeroplane.prototype.fly = function () {
        throw new Error('Method not implemented.');
    };
    return Aeroplane;
}());
var flyable = new Bird();
flyable.fly();
flyable = new Aeroplane();
flyable.fly();
