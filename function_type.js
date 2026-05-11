function greet(msg) {
    console.log('Greet: ', msg);
}
function hello() {
    console.log('Hello:');
}
var greetFun = greet;
console.log(greetFun());
console.log('----------------');
greetFun = hello;
console.log(greetFun());
