interface Flyable {
	fly(): void
}
class Bird implements Flyable {
	fly(): void {
		console.log('Bird can fly.');
	}
}
class Aeroplane implements Flyable {
	fly(): void {
		console.log('Aeroplane can fly.');
	}
}

let flyable: Flyable = new Bird();
flyable.fly();

flyable = new Aeroplane();
flyable.fly();