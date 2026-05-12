class Greeter {
	public greet() {
		console.log('public greet');
	}
	protected greet2() {
		console.log('protected greet2');
	}
	private greet3() {
		console.log('private greet3');
	}
	public greet3Solver() {
		this.greet3();
	}
}
class SubGreeter extends Greeter {
	public greet4() {
		this.greet2();
	}
}
const greeter = new Greeter();
greeter.greet();
// greeter.greet2();
greeter.greet3Solver();

const subGreeter = new SubGreeter();
subGreeter.greet4();

class PrivateDemo {
	private data:number = 100;
}
let obj:PrivateDemo = new PrivateDemo();
// console.log(obj.data); // not accessible
let hackedObj:any = obj;
console.log(hackedObj.data);