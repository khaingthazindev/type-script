type Pair<A,B> = [A,B];

type PairStringNumber = Pair<number, string>;
type PairNumberString = Pair<string, number>;
let a: PairStringNumber = [1, 'Hello'];
console.log('a: ', a);

let b: PairNumberString = ['Hello', 2];
console.log('b: ', b);

type CustomPair<A,B> = {
	name: A,
	age: B
}
let person:CustomPair<string, number> = {
	name: 'Thazin',
	age: 30
}
console.log('person: ', person);

type CustomArray<T> = Array<T>; //T[]
let ary:CustomArray<number> = [1, 2, 3, 4, 5];
console.log('ary: ', ary);