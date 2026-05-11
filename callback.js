function hello() {
    console.log('hello');
}
function delayCallback(callback) {
    setTimeout(callback, 1000);
}
delayCallback(hello);
function add(x, y) {
    return x + y;
}
var fun = add;
var result = fun(1, 2);
console.log('result: ', result);
