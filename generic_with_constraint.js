function getBigger(a, b) {
    return a.length > b.length ? a : b;
}
var a = [1, 2, 3];
var b = [4, 5, 6, 7];
console.log('getBigger(a, b): ', getBigger(a, b));
