type StringOrNumber = string | number;
function align(a:StringOrNumber) {
	if (typeof a === 'string') {
		console.log(`Uppercase a: ${a.toUpperCase()}`);
	}
	console.log(`a: ${a}`);
}
align('20px');
console.log('------------');
align(20);