abstract class Base {
	abstract getName(): string;
	
	printName() {
		console.log('Hello, ', this.getName());
	}
}
class Child extends Base {
	getName() {
		// console.log('Child getName');
		return 'Child getName';
	}
}

let base:Base = new Child();
base.getName();
base.printName();