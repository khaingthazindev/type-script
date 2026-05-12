var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.work = function () {
        console.log("Human ".concat(this.name, " is working."));
    };
    return Human;
}());
var human = new Human('Thazin', 30);
human.work();
