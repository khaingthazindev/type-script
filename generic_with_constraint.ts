function getBigger<T extends {
	length: number
}>(a: T, b: T): T {
	return a.length > b.length ? a : b;
}
let a = [1, 2, 3];
let b = [4, 5, 6, 7];
console.log('getBigger(a, b): ', getBigger(a, b));