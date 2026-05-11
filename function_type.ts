function greet(msg:string) {
	console.log('Greet: ', msg);
}
function hello() {
	console.log('Hello:');
}
let greetFun:Function = greet;
console.log(greetFun());
console.log('----------------');
greetFun = hello;
console.log(greetFun());