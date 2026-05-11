function greet(message:string):void {
	console.log('Greet ', message);
}
greet('hi');

function add(x:number, y:number):number {
	return x + y;
}
let sum = add(1, 2);
console.log('sum ', sum);

const names = ['Alice', 'Brown', 'Charlie'];
names.forEach(name => {
	console.log(name);
})