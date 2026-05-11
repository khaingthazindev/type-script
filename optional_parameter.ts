function greet(message?:string) {
	if (message !== undefined) {
		message = message.toLowerCase();
	}
	console.log('Greet:', message);
}

greet('HELLO');
greet();

// default parameter
function show(one:number, two:number,three=3, four=4) {
	console.log(one);
	console.log(two);
	console.log(three);
	console.log(four);
	
}
show(1, 2);