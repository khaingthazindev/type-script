class Human {
	name: string;
	age: number;
	
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	
	work() {
		console.log(`Human ${this.name} is working.`);
	}
}

let human: Human = new Human('Thazin', 30);
human.work();