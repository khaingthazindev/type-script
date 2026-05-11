class Mamal {
	constructor(public name:string) {
		console.log('Mamal ', name);
	}
}
class Human extends Mamal {
	constructor(public name:string) {
		super(name);
		console.log('Human ', name);
	}
}
