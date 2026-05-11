/*
type Box = {
	value: number
}
let box: Box = {
	value: 1
}
type BoxStr = {
	value: string
}
let box2: BoxStr = {
	value: 'Box'
}
 */


type GenericBox<T> = {
	value: T
}
let genBox: GenericBox<number> = {
	value: 1
}
let genBox2: GenericBox<string> = {
	value: 'genBox2'
}
console.log('genBox: ', genBox);
console.log('genBox2: ', genBox2);
