function sum(...nums:number[]):number {
	return nums.reduce((accumulator, num) => accumulator + num, 0);
}

let result = sum(1, 2);
// console.log('typeof result: ', typeof result);
console.log('sum(1, 2): ', sum(1, 2));
console.log('sum(2, 3): ', sum(2, 3));
