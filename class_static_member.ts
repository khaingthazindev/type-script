class UniqueId {
	static globalId: number = 0;
	uniqueId: number;
	constructor() {
		console.log('this is constructor');
		this.uniqueId = ++UniqueId.globalId;
	}
	print(): void {
		console.log(this.uniqueId);
	}
	static staticMethod() {
		console.log('static method');
	}
	
	static {
		console.log('static block 1');
	}
	static {
		console.log('static block 2');
	}
}
let obj: UniqueId = new UniqueId();
obj.print();
UniqueId.staticMethod();

let obj1: UniqueId = new UniqueId();
obj1.print();

let obj2: UniqueId = new UniqueId();
obj2.print();