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
type Con = {
	new (name:string):Mamal
}
let myClass:Con = Human;
let human = new myClass('KTZ');
console.log('human ', human);

myClass = Mamal;
let mamal = new myClass('Mamal1');
console.log('mamal ', mamal);