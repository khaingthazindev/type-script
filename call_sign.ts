function greet() {
	console.log('Greet');
}
greet.description = 'This function prints greet.';
type FunctionWithDescription = {
	(): void,
	'description': string
};
let fun:FunctionWithDescription = greet;
console.log('description ', fun.description);