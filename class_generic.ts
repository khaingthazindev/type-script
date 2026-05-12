class Box<T> {
	value: T;
	constructor(public inputValue: T) {
		this.value = inputValue;
	}
}
let box:Box<number> = new Box<number>(10);
console.log('box: ', box.value);