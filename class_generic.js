var Box = /** @class */ (function () {
    function Box(inputValue) {
        this.inputValue = inputValue;
        this.value = inputValue;
    }
    return Box;
}());
var box = new Box(10);
console.log('box: ', box.value);
