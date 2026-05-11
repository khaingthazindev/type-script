function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (accumulator, num) { return accumulator + num; }, 0);
}
var result = sum(1, 2);
// console.log('typeof result: ', typeof result);
console.log('sum(1, 2): ', sum(1, 2));
console.log('sum(2, 3): ', sum(2, 3));
