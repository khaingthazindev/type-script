function hello() {
	console.log('hello');
}
type Callback = () => void;
function delayCallback(callback:Callback) {
	setTimeout(callback, 1000);
}
delayCallback(hello);

function add(x:number, y:number):number {
	return x + y;
}
type BinaryFun = (x:number, y:number) => number;
let fun:BinaryFun = add;
let result = fun(1, 2);
console.log('result: ', result);