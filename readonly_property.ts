type Address = {
	city: string,
	address: string
}
type Human = {
	readonly name: string,
	age: number,
	readonly address: Address
}
let human: Human = {
	name: 'Thazin',
	age: 30,
	address: {
		city: 'Shwedaung',
		address: 'TSK'
	}
}
// human.name = "Khaing";
// not allow
// human.address = {
//
// }
// allow
human.address.city = 'Pyay';
console.log('human: ', human);